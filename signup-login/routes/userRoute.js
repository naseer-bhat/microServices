import { Router } from "express";
import { authenticate, authorizeRoles } from "../middlewares/auth.js";
import register from "../controllers/registerController.js";
import login from "../controllers/loginController.js";
import logout from "../controllers/logoutController.js"
import forgotPassword from "../controllers/forgotPassword.js"
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.post('/logout',logout)
router.post('/forgotPassword',forgotPassword)

//Test Routes
router.get("/me", authenticate, (req, res) => {
  res.json({ msg: "Hello, " + req.user.role, user: req.user });
});
router.get("/admin", authenticate, authorizeRoles("admin"), (req, res) => {
  res.json({ msg: "Welcome Admin!" });
});

export default router;
