import cors from "cors";
import { config } from "dotenv";
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "../src/routes/financial-record-router";
config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = process.env.MONGO_URI as string;
console.log(mongoURI);

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
