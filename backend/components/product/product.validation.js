const Joi = require("joi");

// Helper for reusable MongoDB ID validation
const objectId = Joi.string().hex().length(24);

const addNewProduct = {
  body: Joi.object({
    productImage: Joi.string().required().messages({
      "string.empty": "Product image cannot be empty.",
      "any.required": "Product image is required.",
    }),
    productName: Joi.string().required().messages({
      "string.empty": "Product name cannot be empty.",
      "any.required": "Product name is required.",
    }),
    productDescription: Joi.string().required().messages({
      "string.empty": "Product description cannot be empty.",
      "any.required": "Product description is required.",
    }),
    productCategory: Joi.string().required().messages({
      "string.empty": "Product category cannot be empty.",
      "any.required": "Product category is required.",
    }),
    productSubcategory: Joi.string().required().messages({
      "string.empty": "Product subcategory cannot be empty.",
      "any.required": "Product subcategory is required.",
    }),
    productPrice: Joi.number().positive().required().messages({
      "number.base": "Product price must be a number.",
      "any.required": "Product price is required.",
    }),
  }),
};

const getSingleProduct = {
  params: Joi.object({
    id: Joi.string().hex().length(24).required().messages({
      "string.hex": "The Product ID must be a valid hex string (0-9, a-f).",
      "string.length": "The Product ID must be exactly 24 characters long.",
      "any.required": "Product ID is required.",
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

const updateProductById = {
  params: Joi.object({
    id: objectId.required().messages({
      "string.hex": "Invalid Product ID format.",
      "string.length": "Product ID must be 24 characters.",
      "any.required": "Product ID is required.",
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
  }).min(1), // Requires at least one field to be present for an update
};

module.exports = {
  addNewProduct,
  getSingleProduct,
  searchProduct,
  updateProductById,
};
