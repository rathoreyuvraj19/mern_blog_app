import express from "express";
import { User } from "./db.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
