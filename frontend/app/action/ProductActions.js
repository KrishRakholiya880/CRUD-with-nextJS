"use server";

// RevalidatePath
import { revalidatePath } from "next/cache";
// APIs
import {
  fetchAllProducts,
  addNewProducts,
  updateProducts,
  removeProduct,
} from "../httpServices/httpServices";

const localCache = [];

// Get all products for pagination
export async function getProductsAction(page = 1, limit = 15) {
  const skip = (page - 1) * limit;

  try {
    const res = await fetch(fetchAllProducts(skip, limit), {
      cache: "no-store",
    });
    const data = await res.json();
    const allproducts = data.products;
    if (localCache) {
      return [...localCache, ...allproducts];
    } else {
      return allproducts;
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

// Add Product Action
export async function AddProductAction(newProductData) {
  const newProduct = {
    id: Date.now(),
    images: newProductData.images,
    title: newProductData.title,
    description: newProductData.description,
    category: newProductData.category,
    rating: newProductData.rating,
    price: newProductData.price,
  };

  try {
    const res = await fetch(addNewProducts(), {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const resData = await res.json();
  } catch (error) {
    console.log(error);
  }

  localCache.unshift(newProduct);
  revalidatePath("/");
}

// Update Product Action
export async function updateProductAction(formData) {
  const id = formData.id;

  const updatedData = {
    title: formData.title,
    description: formData.description,
    category: formData.category,
    rating: formData.rating,
    price: formData.price,
  };

  try {
    const res = await fetch(updateProducts(id), {
      method: "PATCH",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
  } catch (error) {
    console.log(error);
  }
}

// Delete Product Action
export async function deleteProductAction(id) {
  try {
    const res = await fetch(removeProduct(id), {
      method: "DELETE",
    });
    const resData = await res.json();
    const index = localCache.findIndex((product) => product.id === id);

    if (index !== -1) {
      localCache.splice(index, 1);
    }
    revalidatePath("/");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// resetLocalCache
export async function resetLocalCache() {
  localCache.length = 0;
  return true;
}
