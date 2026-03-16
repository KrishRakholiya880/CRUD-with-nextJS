const ProductMdl = require("../models/Products");

const getAllProducts = async (skip, limit) => {
  const allProducts = await ProductMdl.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return allProducts;
};

const findProductById = async (id) => {
  const foundProduct = await ProductMdl.findById(id);
  return foundProduct;
};

const countProducts = async (query) => {
  let totalCount;
  if (query) {
    totalCount = ProductMdl.countDocuments(query);
  } else {
    totalCount = ProductMdl.countDocuments();
  }
  return totalCount;
};

const createProduct = async (body) => {
  const userCreated = await ProductMdl.create(body);
  return userCreated;
};

const searchProduct = async (query, skip, limit) => {
  const searched = await ProductMdl.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  return searched;
};

const updateProductById = async (id, body) => {
  const updatedUser = await ProductMdl.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedUser;
};

const deleteProductById = async (id) => {
  const deletedUser = await ProductMdl.findByIdAndDelete(id);
  return deletedUser;
};

module.exports = {
  getAllProducts,
  countProducts,
  createProduct,
  searchProduct,
  findProductById,
  updateProductById,
  deleteProductById,
};
