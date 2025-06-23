# microServices
# 📧 Email Microservice

A reusable and deployable microservice built with **Node.js**, **Express**, and **Nodemailer** that allows you to send templated emails via a simple REST API.

---

## 🚀 Features

- Send emails via SMTP (Gmail, Outlook, SendGrid, etc.)
- HTML email templating with variable injection
- JSON-based API for sending emails
- Environment-based configuration
- Easily pluggable into any project via HTTP requests

---

## 🏗️ Project Structure

```
email-microservice/
│
├── config/              # Mailer config using SMTP
├── controllers/         # Core email sending logic
├── routes/              # API route for sending emails
├── templates/           # HTML email templates
├── .env                 # Environment variables
├── app.js               # Server entry point 
└── package.json         # Node dependencies and scripts
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git https://github.com/naseer-bhat/microServices/tree/73a8c7e1856b1ab680abe49ec5c7074e716fc776/EmailMicroService
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

> ⚠️ Use App Passwords if using Gmail and enable "less secure apps" or OAuth2.

---

## 🧪 Run the Server

```bash
npm start
```

> Server runs at `http://localhost:5000` by default.

---

## 📬 API Endpoint

### `POST /api/sendmail`

#### 🔸 Request Body

```json
{
  "to": "recipient@example.com",
  "subject": "Welcome to our app!",
  "template": "welcome",
  "data": {
    "username": "Naseer"
  }
}
```

- `template`: Name of the HTML file inside `templates/` (without `.html`)
- `data`: Key-value pairs to inject into the `{{variable}}` placeholders in the template

---

## 🖋️ Email Template Example (`templates/welcome.html`)

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, {{username}} 👋</h1>
    <p>Welcome to our platform!</p>
  </body>
</html>
```

---

## 🔐 Security & Suggestions

- 🔑 Add API Key auth to protect endpoint
- 🕵️‍♂️ Log all email requests
- 🕰️ Add queuing (Bull + Redis) for async/retry support
- 📈 Monitor failures with logging tools (e.g., Winston)

---

## 🌍 Deployment

Deploy easily on:

- Render / Railway / Vercel / Heroku (Node-ready platforms)
- VPS with Docker
- AWS EC2 or Lambda (serverless)

---

## 📦 Example Usage in Other Projects

```js
import axios from "axios";

await axios.post("https://microservices-kccr.onrender.com/api/sendmail", {
  to: "user@example.com",
  subject: "Hello!",
  template: "welcome",
  data: { username: "Naseer" }
});
```

---

## 🤝 License

MIT © 2025 [Naseer Ahmad Bhat]
