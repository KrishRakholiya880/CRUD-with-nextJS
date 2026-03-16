// auth DB utils
const auth_db = require("../../dbUtils/auth_db");
// auth-helper
const generateAccessAndRefreshTokens = require("../../helper/authHelper");
// JWT
const jwt = require("jsonwebtoken");
// hepler
const { hashPassword, comparePassword } = require("../../helper/bcrypt");

const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const signUp = async (userData) => {
  const { email, password } = userData;

  const foundUser = await auth_db.findOneUser(email);

  if (foundUser) {
    throw new Error("USER_EXIST");
  }

  const hashedPass = await hashPassword(password);
  userData.password = hashedPass;
  const result = await auth_db.createUser(userData);
  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(result);
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
};

const signIn = async (email, password) => {
  const userData = await auth_db.findOneUser(email);

  if (!userData) {
    throw new Error("EMAIL_NOT_FOUND");
  }

  const isMatch = await comparePassword(password, userData.password);
  if (!isMatch) {
    throw new Error("INVALID_PASSWORD");
  }

  const { accessToken, refreshToken } =
    generateAccessAndRefreshTokens(userData);

  userData.refreshToken = refreshToken;
  await userData.save();
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

const logout = async (refreshToken) => {
  const result = await auth_db.findTokenByRefreshTokenAndUpdate(refreshToken);
  return result;
};

const renewAccessToken = async (oldRefreshToken) => {
  const decoded = jwt.verify(oldRefreshToken, REFRESH_TOKEN_SECRET);

  const { accessToken, refreshToken } = generateAccessAndRefreshTokens({
    _id: decoded._id || decoded.id,
    role: decoded.role,
  });

  return { accessToken, refreshToken };
};

module.exports = {
  signUp,
  signIn,
  logout,
  renewAccessToken,
};
