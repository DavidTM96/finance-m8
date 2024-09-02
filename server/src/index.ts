import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-record-router";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://dtorrez1996:ETKAUPUWUKoQ8ZQV@financem8.bxbjx.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
