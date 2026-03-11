const productService = require("./product.service");

const getAllProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;
    // console.log(page, limit);
    const result = await productService.getAllProducts(page, limit);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Get All Products Error:", error.message);
    // return next(error);
  }
};

const addNewProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await productService.addNewProduct(body);
    return res.status(201).json({
      status: true,
      message: "New Product Added!!!",
      id: result._id,
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    return next(error);
  }
};

const searchProduct = async (req, res, next) => {
  try {
    const q = req.query.q;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;

    const result = await productService.searchProduct(q, page, limit);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Search API Error:", error);
    return next(error);
  }
};

const getSingleProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await productService.getSingleProductById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Get Single Product Error:", error.message);
    return next(error);
  }
};

const updateProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await productService.updateProductById(id, body);

    if (!result) {
      return res.status(404).json({ error: "Product Not Found" });
    }

    return res.status(200).json({
      status: true,
      message: "Product Updated!!!",
      id: result._id,
    });
  } catch (error) {
    console.error("Update Product Error:", error);
    return next(error);
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await productService.deleteProductById(id);

    return res.status(200).json({
      status: true,
      message: "Product Deleted!!!",
      id: result?._id,
    });
  } catch (error) {
    console.error("Delete Product Error:", error);
    return next(error);
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
