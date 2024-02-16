import { z } from "zod";
import { User, UserSchema } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const UserValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signin = async (req, res) => {
  const validation = UserValidation.safeParse(req.body);
  const { email, password } = req.body;

  if (validation.success) {
    try {
      const user = await User.findOne({
        email,
      });
      if (user === null) {
        throw new Error("User NOT found");
      }
      console.log(user);
      const isValid = bcryptjs.compareSync(password, user.password);

      if (isValid) {
        // console.log("hi");
        const token = await jwt.sign({ id: user._id }, JWT_SECRET);
        console.log(token);
        return res.status(200).json({
          message: "Signin Successfull",
          token: token,
        });
      } else {
        return res.status(401).json({
          message: "Incorrect Password",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  } else {
    const errors = validation.error.flatten();
    return res
      .status(404)
      .json({ message: JSON.stringify(errors.fieldErrors) });
  }
};
