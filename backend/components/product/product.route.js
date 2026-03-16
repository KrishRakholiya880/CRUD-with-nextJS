// Express
const express = require("express");
// Product Controller
const productController = require("./product.controller");
// middlewares
const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
const validate = require("../../middleware/validation");
// Schema
const productValidateSchema = require("./product.validation");
// Router
const router = express.Router();

router
  .route("/")
  .get(
    validate(productValidateSchema.getAllProducts),
    productController.getAllProducts,
  )
  .post(
    verifyToken,
    isAdmin,
    validate(productValidateSchema.addOrUpdateProduct),
    productController.addOrUpdateProduct,
  );
router
  .route("/item/:id")
  .get(
    validate(productValidateSchema.getSingleProduct),
    productController.getSingleProductById,
  )
  .put(
    verifyToken,
    isAdmin,
    validate(productValidateSchema.addOrUpdateProduct),
    productController.addOrUpdateProduct,
  )
  .delete(
    verifyToken,
    isAdmin,
    validate(productValidateSchema.getSingleProduct),
    productController.deleteProductById,
  );

module.exports = router;
