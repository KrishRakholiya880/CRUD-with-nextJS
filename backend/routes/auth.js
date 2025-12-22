// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "username, email and password are required" });
    }

    // Check duplicate email
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Optional: check duplicate username too
    const usernameTaken = await User.findOne({ username });
    if (usernameTaken) {
      return res.status(400).json({ message: "Username already taken" });
    }

    let role = "user";

    if (
      email.includes(process.env.ADMIN_EMAIL) &&
      password === process.env.ADMIN_PASSWORD
    ) {
      role = "admin";
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      username,
      email: email.toLowerCase(),
      password: hashed,
      role,
    });

    await user.save();

    // Generate token
    const token = generateToken(user);

    // Return the provided data (without password) and token
    return res.status(201).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role,
      },
      token,
      message: "Signup successfully",
    });
  } catch (err) {
    console.error("Register error:", err);
    // If duplicate key error arrives from mongoose unique index
    if (err.code === 11000) {
      return res.status(400).json({ message: "Duplicate field value error" });
    }
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * POST /login
 * Expects body: { email, password }
 * Returns: { token }
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    // Find user by email (stored lowercase)
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Return token (you can also return user info if you want)
    return res.json({ user, token, message: "Logged in successfully" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
