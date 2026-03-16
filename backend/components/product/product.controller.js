// product service
const productService = require("./product.service");

const getAllProducts = async (req, res, next) => {
  try {
    const query = req.query?.q;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;
    // console.log(page, limit);
    const result = await productService.getAllProducts(query, page, limit);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Get All Products Error:", error.message);
    return next(error);
  }
};

const addOrUpdateProduct = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const result = await productService.addOrUpdateProduct(id, body);

    return res.status(200).json({
      status: true,
      id: result._id,
    });
  } catch (error) {
    console.error("Error while Add or Update product", error);
    return next(error);
  }
};

const getSingleProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await productService.getSingleProductById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log("Get Single Product Error:", error.message);
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
  deleteProductById,
  addOrUpdateProduct,
};
