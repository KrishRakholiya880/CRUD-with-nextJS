const Joi = require("joi");

const forEveryIds = (idName) => {
  return Joi.string()
    .hex()
    .length(24)
    .required()
    .messages({
      "string.hex": `${idName} must be a valid hex string (0-9, a-f).`,
      "string.length": `${idName} must be exactly 24 characters long.`,
      "any.required": `${idName} is required.`,
    });
};

const getCartData = {
  params: Joi.object({
    userId: forEveryIds("userId"),
  }),
};

const addToCart = {
  body: Joi.object({
    userId: forEveryIds("userId"),
    items: Joi.array()
      .items(
        Joi.object({
          product: forEveryIds("productId"),
          quantity: Joi.number().integer().min(1).required().messages({
            "number.min": "Quantity must be at least 1.",
          }),
          priceAddition: Joi.number().positive().required(),
          _id: Joi.string().hex().length(24).optional(),
        }),
      )
      .min(1)
      .required()
      .messages({
        "array.min": "The cart must contain at least one item.",
      }),
  }),
};

const removeFromCart = {
  params: Joi.object({
    cartId: forEveryIds("cartId"),
    productId: forEveryIds("productId"),
  }),
};

module.exports = { getCartData, addToCart, removeFromCart };
