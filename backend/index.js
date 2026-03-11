// .env
require("dotenv").config();
// Express
const express = require("express");
// connection
const { connectionToDB } = require("./helper/connection");
// App
const app = express();
// PORT
const PORT = process.env.PORT || 8000;
// indexRoutes
const indexRoutes = require("./components/indexRoutes");
// cors
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

// connection
connectionToDB(process.env.MONGO_URI || "mongodb://localhost:27017/next_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// Routes
app.use("/api", indexRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
