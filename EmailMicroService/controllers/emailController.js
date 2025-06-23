import { transporter } from "../config/mailer.js";
import fs from "fs";
import path from "path";

export const sendEmail = async (req, res) => {
  const { to, subject, template, data } = req.body;

  try {
    const templatePath = path.join("templates", `${template}.html`);
    let html = fs.readFileSync(templatePath, "utf-8");

    for (const key in data) {
      html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email sending failed", error: error.message });
  }
};
