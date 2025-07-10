import { verifyToken } from "../utils/jwt.js";
export const authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decode = verifyToken(token);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(403).json({ msg: "Invalid or expired token" });
  }
};
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access denied: Insufficient role" });
    }
    next();
  };
};
