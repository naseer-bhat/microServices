import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

import emailRoutes from "./routes/emailRoutes.js";
// import { apiKeyAuth } from "./middlewares/apiKeyAuth.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
// app.use(apiKeyAuth);
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "welcome.html"));
});
app.use("/api", emailRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Email service running on port ${PORT}`);
});
