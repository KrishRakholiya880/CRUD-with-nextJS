// User modal
const UserMdl = require("../../models/User");
// auth-helper
const generateAccessAndRefreshTokens = require("../../helper/authHelper");
// JWT
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../../helper/bcrypt");

const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const signUp = async (userData) => {
  const { email, password } = userData;

  const foundUser = await UserMdl.findOne({ email: email });

  if (foundUser) {
    throw new Error("USER_EXIST");
  }

  try {
    const hashedPass = await hashPassword(password);
    userData.password = hashedPass;
    const result = await UserMdl.create(userData);
    const { accessToken, refreshToken } =
      generateAccessAndRefreshTokens(result);
    return {
      user: {
        id: result._id,
        username: result.username,
        email: result.email,
        role: result.role,
      },
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error("Signup Service Error:", error.message);
  }
};

const signIn = async (email, password) => {
  const userData = await UserMdl.findOne({ email: email });

  // 1. Check if user's email exists
  if (!userData) {
    throw new Error("EMAIL_NOT_FOUND");
  }

  // 2. Check if password matches
  const isMatch = await comparePassword(password, userData.password);
  if (!isMatch) {
    throw new Error("INVALID_PASSWORD");
  }

  // 3. Success logic
  const { accessToken, refreshToken } =
    generateAccessAndRefreshTokens(userData);
  return {
    user: {
      id: userData._id,
      username: userData.username,
      email: userData.email,
      role: userData.role,
    },
    accessToken,
    refreshToken,
  };
};

const renewAccessToken = async (oldRefreshToken) => {
  try {
    const decoded = jwt.verify(oldRefreshToken, REFRESH_TOKEN_SECRET);

    const { accessToken, refreshToken } = generateAccessAndRefreshTokens({
      _id: decoded._id || decoded.id,
      role: decoded.role,
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error("INVALID_REFRESH_TOKEN");
  }
};

module.exports = {
  signUp,
  signIn,
  renewAccessToken,
};
