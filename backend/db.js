import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

main()
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

//Always Remember to define it before model
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", UserSchema);

export { User, UserSchema };
