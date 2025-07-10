import User from "../models/userModel.js";
import hashPassword from "../utils/hashPassword.js";
import { generateToken } from "../utils/jwt.js";
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ msg: "User already exists" });
    }
    const hashed = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
    });
    const token = generateToken({ userId: user._id, role: user.role });
    return res.status(201).json({
      msg: "User registered successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export default register;
