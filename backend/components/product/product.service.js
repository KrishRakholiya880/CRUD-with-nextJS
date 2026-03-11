const ProductMdl = require("../../models/Products");

const getAllProducts = async (page = 1, limit = 15) => {
  try {
    const skip = (page - 1) * limit;

    const products = await ProductMdl.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!products) {
      throw new Error("PRODUCT_NOT_FOUND");
    }

    const totalProducts = await ProductMdl.countDocuments();

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

const addNewProduct = async (body) => {
  try {
    const result = await ProductMdl.create(body);
    if (!result) throw new Error("PRODUCT_NOT_FOUND");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const searchProduct = async (queryText, page = 1, limit = 15) => {
  try {
    const skip = (page - 1) * limit;

    const searchQuery = {
      $or: [
        { productName: { $regex: queryText, $options: "i" } },
        { productCategory: { $regex: queryText, $options: "i" } },
        { productSubcategory: { $regex: queryText, $options: "i" } },
        { productDescription: { $regex: queryText, $options: "i" } },
      ],
    };

    const products = await ProductMdl.find(searchQuery)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!products) {
      throw new Error("PRODUCT_NOT_FOUND");
    }

    const totalMatching = await ProductMdl.countDocuments(searchQuery);

    return {
      products,
      currentPage: Number(page),
      totalPages: Math.ceil(totalMatching / limit),
      totalProducts: totalMatching,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSingleProductById = async (id) => {
  try {
    const result = await ProductMdl.findById(id);
    if (!result) throw new Error("PRODUCT_NOT_FOUND");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProductById = async (id, body) => {
  try {
    const result = await ProductMdl.findByIdAndUpdate(id, body, { new: true });
    if (!result) throw new Error("PRODUCT_NOT_FOUND");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteProductById = async (id) => {
  try {
    const result = await ProductMdl.findByIdAndDelete(id);
    if (!result) throw new Error("PRODUCT_NOT_FOUND");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllProducts,
  getSingleProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
  searchProduct,
};
