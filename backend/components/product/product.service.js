// product DB utils
const product_db = require("../../dbUtils/product_db");

const getAllProducts = async (query, page = 1, limit = 15) => {
  try {
    const skip = (page - 1) * limit;
    let products;
    let totalProducts;

    if (query) {
      const searchQuery = {
        $or: [
          { productName: { $regex: query, $options: "i" } },
          { productCategory: { $regex: query, $options: "i" } },
          { productSubcategory: { $regex: query, $options: "i" } },
          { productDescription: { $regex: query, $options: "i" } },
        ],
      };

      products = await product_db.searchProduct(searchQuery, skip, limit);
      totalProducts = await product_db.countProducts(searchQuery);
    } else {
      products = await product_db.getAllProducts(skip, limit);
      totalProducts = await product_db.countProducts();
    }

    if (!products) {
      throw new Error("PRODUCT_NOT_FOUND");
    }

    return {
      products,
      currentPage: Number(page),
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const addOrUpdateProduct = async (id, body) => {
  const foundProduct = await product_db.findProductById(id);

  try {
    if (foundProduct) {
      const result = await product_db.updateProductById(id, body);
      return result;
    } else {
      const result = await product_db.createProduct(body);
      return result;
    }
  } catch (error) {
    throw new Error(error.meesage);
  }
};

const getSingleProductById = async (id) => {
  const result = await product_db.findProductById(id);
  if (!result) throw new Error("PRODUCT_NOT_FOUND");
  return result;
};

const deleteProductById = async (id) => {
  try {
    const result = await product_db.deleteProductById(id);
    if (!result) throw new Error("PRODUCT_NOT_FOUND");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllProducts,
  getSingleProductById,
  deleteProductById,
  addOrUpdateProduct,
};
