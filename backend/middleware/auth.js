// middleware/auth.js
const jwt = require("jsonwebtoken");

/**
 * verifyToken - middleware to validate JWT and attach payload as req.user
 */
function verifyToken(req, res, next) {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "No authorization header provided" });
  }

  // Expect header format: "Bearer <token>"
  const parts = authHeader.split(" ");
  const token = parts.length === 2 ? parts[1] : null;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Invalid authorization header format" });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error("JWT_SECRET is not set");
    return res.status(500).json({ message: "Server configuration error" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
}

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
    }

    next();
  };
}

module.exports = { verifyToken, authorizeRoles };
