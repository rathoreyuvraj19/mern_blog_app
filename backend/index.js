import express from "express";
import { User } from "./db.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import signupRouter from "./routes/auth.route.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1/signup", signupRouter);

// //Middleware to handle Error
// app.use((err, res, req, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
