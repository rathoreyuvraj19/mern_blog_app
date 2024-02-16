import { z } from "zod";
import { User, UserSchema } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const UserValidation = z.object({
  username: z.string().min(3).max(15),
  password: z.string().min(6),
  email: z.string().email(),
});

export const signup = async (req, res) => {
  const validate = UserValidation.safeParse(req.body);
  const { username, email } = req.body;

  if (validate.success) {
    // If validation succeeds, proceed with signup
    try {
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Username or email already exists" });
      }

      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      const userId = user._id;
      const token = await jwt.sign({ userId }, JWT_SECRET);

      console.log("User Created Successfully");
      return res.status(200).json({
        message: "User Created Successfully",
        token: token,
      });
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  } else {
    const errors = validate.error.flatten();
    // console.log(errors.fieldErrors);
    return res
      .status(404)
      .json({ message: JSON.stringify(errors.fieldErrors) });
  }
};
