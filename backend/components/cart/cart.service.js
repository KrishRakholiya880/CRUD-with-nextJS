// cart DB utils
const cart_db = require("../../dbUtils/cart_db");

// Get Cart Data
const getCartData = async (userId) => {
  const cart = await cart_db.getCartData(userId);

  if (!cart) {
    throw new Error("CART_NOT_FOUND");
  }

  return cart;
};

// Add To Cart
const addToCart = async ({ userId, items }) => {
  const item = items[0];

  const newProductId = item.product._id || item.product;

  let cart = await cart_db.getCartData(userId);

  if (!cart) {
    return await cart_db.createNewCart(userId, [item]);
  }

  const itemIndex = cart.items.findIndex((p) => {
    const existingId = p.product._id || p.product;
    return existingId.toString() === newProductId.toString();
  });

  if (itemIndex > -1) {
    throw new Error("PRODUCT_EXIST_IN_CART");
  } else {
    cart.items.push(item);
  }

  await cart.save();
  return cart;
};

// Remove From Cart
const removeFromCart = async (cartId, productId) => {
  try {
    const result = await cart_db.removeProductFromCart(cartId, productId);

    return result;
  } catch (error) {
    console.error("Remove From Cart Error:", error.message);
  }
};

module.exports = {
  getCartData,
  addToCart,
  removeFromCart,
};
