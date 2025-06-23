
import dotenv from "dotenv";
dotenv.config();

export const apiKeyAuth = (req, res, next) => {
  const clientKey = req.headers["api-key"];

  if (!clientKey || clientKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Forbidden: Invalid or missing API key" });
  }

  next();
};
