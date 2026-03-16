// Express
const express = require("express");
// Cart controller
const cartController = require("./cart.contoller");
// validation
const validate = require("../../middleware/validation");
// cartSchema
const cartValidationSchema = require("./cart.validation");

// Router
const router = express.Router();

router
  .route("/")
  .post(validate(cartValidationSchema.addToCart), cartController.addToCart);
router
  .route("/:cartId/:productId")
  .delete(
    validate(cartValidationSchema.removeFromCart),
    cartController.removeFromCart,
  );
router
  .route("/:userId")
  .get(validate(cartValidationSchema.getCartData), cartController.getCartData);

module.exports = router;
