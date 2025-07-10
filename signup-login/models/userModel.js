import { Schema, model } from "mongoose";
import { config } from "dotenv";
config();
const roles = process.env.ROLES ? process.env.ROLES.split(",") : ["user"];
const UserSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true },
  role: { type: String, enum: roles, default: "user" },
});
export default model("User", UserSchema);
