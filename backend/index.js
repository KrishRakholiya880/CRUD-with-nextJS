require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/auth");

// Import middleware
const { verifyToken, authorizeRoles } = require("./middleware/auth");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Protected route for user or admin
app.get(
  "/api/protected/user",
  verifyToken,
  authorizeRoles("user", "admin"),
  (req, res) => {
    res.json({
      message: `Login successfully`,
    });
  }
);

// Protected route for admin only
app.get(
  "/api/protected/admin",
  verifyToken,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: `Admin login successfully`,
    });
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
