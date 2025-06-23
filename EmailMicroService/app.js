import express from "express";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";
import { apiKeyAuth } from "./middlewares/apiKeyAuth.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(apiKeyAuth)
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Email service running on port ${PORT}`);
});
