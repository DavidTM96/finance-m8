// username: dtorrez1996
// ETKAUPUWUKoQ8ZQV

import express from "express";
import mongoose from "mongoose";
import { financialRecordRouter } from "./routes/financial-record-router";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://dtorrez1996:ETKAUPUWUKoQ8ZQV@financem8.bxbjx.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.use("/api/financial-records", financialRecordRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
