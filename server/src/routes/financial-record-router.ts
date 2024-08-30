import { Request, Response, Router } from "express";
import FinancialRecordModel from "../schema/financial-record";

export const financialRecordRouter = Router();

// GET /api/financial-records
financialRecordRouter.get("/", async (req: Request, res: Response) => {
  try {
    const records = await FinancialRecordModel.find();
  } catch (error) {}
});

// GET /api/financial-records/:id
financialRecordRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId: userId });
    if (records.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records", error });
  }
});

// POST /api/financial-records
financialRecordRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newRecord = req.body;
    const record = new FinancialRecordModel(newRecord);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error creating record", error });
  }
});

// PATCH /api/financial-records/:id
financialRecordRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedRecord = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      updatedRecord,
      { new: true }
    );
    if (!record) {
      return res
        .status(404)
        .json({ message: `Record with id ${id} not found` });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error updating record", error });
  }
});

// DELETE /api/financial-records/:id
financialRecordRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    if (!record) {
      return res
        .status(404)
        .json({ message: `Record with id ${id} not found` });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error deleting record", error });
  }
});
