const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  return hashedPass;
};

const comparePassword = async (passTocompare, passFromDB) => {
  const comparedPass = await bcrypt.compare(passTocompare, passFromDB);
  return comparedPass;
};

module.exports = {
  hashPassword,
  comparePassword,
};
