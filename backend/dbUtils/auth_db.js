const UserMdl = require("../models/User");

const findOneUser = async (email) => {
  const userFound = await UserMdl.findOne({ email: email });
  return userFound;
};

const createUser = async (userData) => {
  const userCreated = await UserMdl.create(userData);
  return userCreated;
};

const findTokenByRefreshTokenAndUpdate = async (refreshToken) => {
  const result = await UserMdl.findOneAndUpdate(
    { refreshToken: refreshToken },
    { $set: { refreshToken: null } },
  );
  return result;
};

module.exports = {
  findOneUser,
  createUser,
  findTokenByRefreshTokenAndUpdate,
};
