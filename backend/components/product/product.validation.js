const Joi = require("joi");

// Helper for reusable MongoDB ID validation
const objectId = Joi.string().hex().length(24);

const getSingleProduct = {
  params: Joi.object({
    id: objectId.required().messages({
      "string.hex": "The Product ID must be a valid hex string (0-9, a-f).",
      "string.length": "The Product ID must be exactly 24 characters long.",
      "any.required": "Product ID is required.",
    }),
  }),
};

const getAllProducts = {
  query: Joi.object({
    q: Joi.string().optional().messages({
      "string.empty": "Product query cannot be empty.",
    }),
    page: Joi.number().integer().min(1).optional().messages({
      "number.base": "Page must be a number.",
      "number.min": "Page must be at least 1.",
    }),
    limit: Joi.number().integer().min(1).max(30).optional().messages({
      "number.base": "Limit must be a number.",
      "number.max": "Limit cannot exceed 30 items per page.",
    }),
  }),
};

const searchProduct = {
  query: Joi.object({
    q: Joi.string().required().messages({
      "string.empty": "Product query cannot be empty.",
      "any.required": "Product query is required.",
    }),
    page: Joi.number().integer().min(1).optional().messages({
      "number.base": "Page must be a number.",
      "number.min": "Page must be at least 1.",
    }),
    limit: Joi.number().integer().min(1).max(30).optional().messages({
      "number.base": "Limit must be a number.",
      "number.max": "Limit cannot exceed 30 items per page.",
    }),
  }),
};

const addOrUpdateProduct = {
  params: Joi.object({
    id: objectId.optional().messages({
      "string.hex": "Invalid Product ID format.",
      "string.length": "Product ID must be 24 characters.",
    }),
  }),
  body: Joi.object({
    productImage: Joi.string().optional(),
    productName: Joi.string().optional(),
    productDescription: Joi.string().optional(),
    productCategory: Joi.string().optional(),
    productSubcategory: Joi.string().optional(),
    productPrice: Joi.number().positive().optional().messages({
      "number.base": "Product price must be a number.",
    }),
  }).min(1),
};

module.exports = {
  addOrUpdateProduct,
  getAllProducts,
  getSingleProduct,
  searchProduct,
};
