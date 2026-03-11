// Cart Modal
const CartMdl = require("../../models/Cart");

// Get Cart Data
const getCartData = async (userId) => {
  const cart = await CartMdl.findOne({ userId }).populate({
    path: "items.product",
    select:
      "productName productDescription productPrice productImage productCategory",
  });

  if (!cart) {
    throw new Error("CART_NOT_FOUND");
  }

  return cart;
};

// Add To Cart
const addToCart = async ({ userId, items }) => {
  const item = items[0];

  const newProductId = item.product._id || item.product;

  let cart = await CartMdl.findOne({ userId });

  if (!cart) {
    return await CartMdl.create({
      userId,
      items: [item],
    });
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
    const result = await CartMdl.findOneAndUpdate(
      { _id: cartId },
      {
        $pull: {
          items: { product: productId },
        },
      },
      { new: true },
    );

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
