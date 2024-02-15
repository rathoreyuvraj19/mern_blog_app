import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

main()
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
  },
});

const UserModel = mongoose.model("UserModel", UserSchema);

export { UserModel };
