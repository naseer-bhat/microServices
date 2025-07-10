import User from "../models/userModel.js";
import { generateToken } from "../utils/jwt.js";
import argon2 from "argon2";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const isMatched = await argon2.verify(user.password, password);
    if (!isMatched) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const token = generateToken({ userId: user._id, role: user.role });

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export default login;
