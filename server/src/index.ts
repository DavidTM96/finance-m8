// username: dtorrez1996
// ETKAUPUWUKoQ8ZQV

import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://dtorrez1996:ETKAUPUWUKoQ8ZQV@financem8.bxbjx.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
