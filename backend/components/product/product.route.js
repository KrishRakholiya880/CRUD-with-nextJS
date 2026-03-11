// Express
const express = require("express");
// Product Controller
const productController = require("./product.controller");
// middlewares
const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
const validate = require("../../middleware/validation");
// Schema
const productValidateSchema = require("./product.validation");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    verifyToken,
    isAdmin,
    validate(productValidateSchema.addNewProduct),
    productController.addNewProduct,
  );
router
  .route("/search")
  .get(
    validate(productValidateSchema.searchProduct),
    productController.searchProduct,
  );
router
  .route("/item/:id")
  .get(
    validate(productValidateSchema.getSingleProduct),
    productController.getSingleProductById,
  )
  .patch(
    verifyToken,
    isAdmin,
    validate(productValidateSchema.updateProductById),
    productController.updateProductById,
  )
  .delete(
    verifyToken,
    isAdmin,
    validate(productValidateSchema.getSingleProduct),
    productController.deleteProductById,
  );

module.exports = router;
