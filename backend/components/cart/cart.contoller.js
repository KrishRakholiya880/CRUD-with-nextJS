// Cart service
const cartService = require("./cart.service");

// Get Cart Data
const getCartData = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const result = await cartService.getCartData(userId);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

// Add To Cart
const addToCart = async (req, res, next) => {
  try {
    const { userId, items } = req.body;

    const updatedCart = await cartService.addToCart({ userId, items });

    return res.status(200).json({
      message: "Cart updated successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error While addToCart: ", error);
    return next(error);
  }
};

// Remove From Cart
const removeFromCart = async (req, res, next) => {
  try {
    const { cartId, productId } = req.params;

    const updatedCart = await cartService.removeFromCart(cartId, productId);

    return res.status(200).json({
      message: "Product removed successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error While removeFromCart :", error);
    return next(error);
  }
};

module.exports = {
  getCartData,
  addToCart,
  removeFromCart,
};
