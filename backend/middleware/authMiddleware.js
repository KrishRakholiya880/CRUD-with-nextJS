const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) {
    throw new Error("ACCESS_TOKEN_REQUIRED");
  }
  const decode = jwt.verify(token, ACCESS_TOKEN_SECRET);
  req.user = decode;
  next();

  // const authHeader =
  //   req.headers["authorization"] || req.headers["Authorization"];
  // let token;

  // if (authHeader && authHeader.startsWith("Bearer ")) {
  //   token = authHeader.split(" ")[1];
  // }

  // if (!token) {
  //   return res.status(401).json({ error: "Access Denied. No token provided." });
  // }

  // try {
  //   const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
  //   req.user = decoded;
  //   next();
  // } catch (error) {
  //   if (error.name === "TokenExpiredError") {
  //     return res
  //       .status(401)
  //       .json({ error: "Token Expired", code: "TOKEN_EXPIRED" });
  //   }
  //   return res.status(403).json({ error: "Invalid token." });
  // }
};

const isAdmin = (req, res, next) => {
  const role = req?.user?.role;
  if (role === "ADMIN") {
    return next();
  }
  return res.status(403).json({ error: "Access Denied: Admins Only!" });
};

module.exports = { verifyToken, isAdmin };
