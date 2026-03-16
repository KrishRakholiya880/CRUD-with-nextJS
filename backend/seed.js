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

// const generateAndSeed = async (count) => {
//   try {
//     await connectionToDB(MONGO_URI);
//     console.log("Connected to MongoDB");

//     const products = [];
//     for (let i = 1; i <= count; i++) {
//       products.push({
//         productImage:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
//         productName: `Test ${i}`,
//         productDescription: `Test ${i} `.repeat(14).trim(),
//         productCategory: `Test ${i} `.repeat(4).trim(),
//         productSubcategory: `Test ${i} `.repeat(3).trim(),
//         productPrice: i,
//       });
//     }

//     await ProductMdl.deleteMany({});
//     const result = await ProductMdl.insertMany(products);

//     console.log(`Successfully inserted ${result.length} test products!`);
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     // 3. Disconnect only when everything above is done
//     await mongoose.disconnect();
//     console.log("MongoDB disconnected safely.");
//   }
// };

// generateAndSeed(60);
