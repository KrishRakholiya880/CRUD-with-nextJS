const mongoose = require("mongoose");
const productData = require("./constant/MOCK_DATA (2).json");
const ProductMdl = require("./models/Products");
const { connectionToDB } = require("./helper/connection");

connectionToDB(process.env.MONGO_URI || "mongodb://localhost:27017/next_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const seedDB = async () => {
  try {
    await ProductMdl.deleteMany({});
    await ProductMdl.insertMany(productData); // Insert new data
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect(); // Disconnect after seeding
    console.log("MongoDB disconnected.");
  }
};

seedDB();
