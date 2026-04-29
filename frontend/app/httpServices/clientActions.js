// apiClient (your Axios instance with interceptors)
import apiClient from "./api";
// Auth actions
import { createSession } from "../auth-actions/auth-actions";
// APIs
import {
  fetchAllProducts,
  addNewProducts,
  updateProducts,
  removeProduct,
  searchProducts,
  fetchSingleProductData,
  addToCart,
  signinAPI,
  signupAPI,
  getCartData,
  removeFromCart,
} from "./httpServices";

// PRODUCT ACTIONS
// 1. Get all products
export async function getProductsAction(page, limit) {
  try {
    const response = await apiClient.get(
      fetchAllProducts(Number(page), Number(limit)),
    );
    return response.data;
  } catch (error) {
    console.log("Fetch Error:", error.response?.data || error.message);
    return { products: [] };
  }
}

// 2. Get Single Product Data
export async function getSingleProductAction(id) {
  try {
    if (!id) throw new Error("Product ID is required");
    const result = await apiClient.get(fetchSingleProductData(id));
    return result.data;
  } catch (error) {
    console.log(
      "Get Single Product Error:",
      error.response?.data?.error || error.message,
    );
    return null;
  }
}

// 3. Search products
export async function searchProductsAction(query, page, limit) {
  try {
    // Construct the URL with query parameters
    const response = await apiClient.get(searchProducts(query, page, limit));
    return response.data;
  } catch (error) {
    console.log("Search Error:", error.response?.data || error.message);
    return { products: [], totalPages: 0 };
  }
}

// 4. Add Product
export async function addProductAction(newProductData) {
  try {
    const finalProduct = {
      productImage: newProductData.images,
      productName: newProductData.name,
      productDescription: newProductData.description,
      productCategory: newProductData.category,
      productSubcategory: newProductData.sub_category,
      productPrice: newProductData.price,
    };
    const response = await apiClient.post(addNewProducts(), finalProduct);
    return response.data;
  } catch (error) {
    console.log("Add Product Error:", error.response?.data || error.message);
    throw error;
  }
}

// 5. Update Product
export async function updateProductAction(formData) {
  const id = formData.id;
  const updatedData = {
    productImage: formData.images,
    productName: formData.name,
    productDescription: formData.description,
    productCategory: formData.category,
    productSubcategory: formData.sub_category,
    productPrice: formData.price,
  };

  try {
    const response = await apiClient.patch(updateProducts(id), updatedData);
    return response.data;
  } catch (error) {
    console.log("Update Product Error:", error.response?.data || error.message);
    throw error;
  }
}

// 6. Delete Product
export async function deleteProductAction(id) {
  try {
    const res = await apiClient.delete(removeProduct(id));
    return res.data;
  } catch (error) {
    console.log("Delete Error:", error.response?.data || error.message);
    throw error;
  }
}

// AUTH ACTIONS
// 1. Signup User
export async function signupAction(credentials) {
  try {
    const res = await apiClient.post(signupAPI(), credentials);

    return {
      result: res.data,
    };
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
}

// 2. Login User
export async function signInAction(credentials) {
  try {
    const res = await apiClient.post(signinAPI(), credentials);

    return {
      result: res.data,
    };
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
}

// CART ACTIONS
// 1. Get Cart Data
export async function getCartDataAction(userId) {
  try {
    const res = await apiClient.get(getCartData(userId));
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 2. Add To Cart
export async function addToCartAction(data) {
  try {
    const res = await apiClient.post(addToCart(), data);
    return {
      success: true,
      message: res.data?.message || "Item added to cart",
      cart: res.data,
    };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

// 3.removeFromCartAction
export async function removeFromCartAction({ cartId, productId }) {
  try {
    const res = await apiClient.delete(removeFromCart(cartId, productId));

    return {
      success: true,
      message: res.data?.message || "Item removed successfully",
      cart: res.data?.cart,
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Failed to remove item from cart.";
    console.log("Remove From Cart Action Error:", errorMessage);
    throw new Error(errorMessage);
  }
}
