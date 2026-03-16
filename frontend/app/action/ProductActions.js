"use server";

// RevalidatePath
import { revalidatePath } from "next/cache";
// apiClient
import apiClient from "../httpServices/api";
// APIs
import {
  fetchAllProducts,
  addNewProducts,
  updateProducts,
  removeProduct,
  searchProducts,
  fetchSingleProductData,
} from "../httpServices/httpServices";

// Get all products
export async function getProductsAction(page, limit) {
  try {
    const response = await apiClient.get(fetchAllProducts(page, limit));
    return response.data;
  } catch (error) {
    console.log("Fetch Error:", error.response?.data || error.message);
    return [];
  }
}

// Get Single Product Data
export async function getSingleProductAction(id) {
  try {
    if (!id) throw new Error("Product ID is required");

    const result = await apiClient.get(fetchSingleProductData(id));
    return result.data;
  } catch (error) {
    console.log(
      "Get Single Product Error:",
      error.response?.data.error || error.message,
    );
    return error;
  }
}

// Search products
export async function searchProductsAction(query) {
  try {
    const response = await apiClient.get(searchProducts(query));
    return response.data;
  } catch (error) {
    console.log("Search Error:", error.response?.data || error.message);
    return [];
  }
}

// Add Product Action
export async function AddProductAction(newProductData) {
  try {
    const finalProduct = {
      productImage: newProductData.images,
      productName: newProductData.name,
      productDescription: newProductData.description,
      productCategory: newProductData.category,
      productSubcategory: newProductData.sub_category,
      productPrice: newProductData.price,
    };

    // apiClient automatically adds Authorization headers and handles JSON
    const response = await apiClient.post(addNewProducts(), finalProduct);
    revalidatePath("/");
    return response.data;
  } catch (error) {
    console.error("Add Product Error:", error.response?.data || error.message);
    return error;
  }
}

// Update Product Action
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
    revalidatePath("/");
    return response.data;
  } catch (error) {
    console.error(
      "Update Product Error:",
      error.response?.data || error.message,
    );
    return error;
  }
}

// Delete Product Action
export async function deleteProductAction(id) {
  try {
    const response = await apiClient.delete(removeProduct(id));
    revalidatePath("/");
    return response.data;
  } catch (error) {
    // If the interceptor threw "SESSION_EXPIRED", pass it back
    if (error.message === "SESSION_EXPIRED" || error.response?.status === 401) {
      return { success: false, redirect: "/login" };
    }
    return { success: false, error: "Delete failed" };
  }
}
