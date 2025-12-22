// utils/generateToken.js
const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    id: user._id ? user._id.toString() : user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  // token lifetime can be configured via env or default to 7d
  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";

  return jwt.sign(payload, secret, { expiresIn });
}

module.exports = generateToken;
