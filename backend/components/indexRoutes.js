const express = require("express");
// Routes
const productRoute = require("./product/product.route");
const authRoute = require("./auth/auth.route");
const cartRouter = require("./cart/cart.route");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/cart", cartRouter);

module.exports = router;
