// Cart Modal
const CartMdl = require("../models/Cart");

const getCartData = async (userId) => {
  const cartData = await CartMdl.findOne({ userId }).populate({
    path: "items.product",
    select:
      "productName productDescription productPrice productImage productCategory",
  });
  return cartData;
};

const findCart = async (userId) => {
  const foundCart = await CartMdl.findOne({ userId });
  return foundCart;
};

const createNewCart = async (userId, items) => {
  const newCart = await CartMdl.create({
    userId,
    items,
  });
  return newCart;
};

const removeProductFromCart = async (cartId, productId) => {
  const removedProduct = await CartMdl.findOneAndUpdate(
    { _id: cartId },
    {
      $pull: {
        items: { _id: productId },
      },
    },
    { new: true },
  );
  return removedProduct;
};

module.exports = {
  getCartData,
  findCart,
  createNewCart,
  removeProductFromCart,
};
