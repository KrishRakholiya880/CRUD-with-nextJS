const mongoose = require("mongoose");

const connectionToDB = async (mongoURI) => {
  return await mongoose.connect(mongoURI);
};

module.exports = { connectionToDB };
