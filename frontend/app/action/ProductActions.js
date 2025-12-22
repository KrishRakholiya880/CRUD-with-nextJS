"use server";

// revalidatePath
import { revalidatePath } from "next/cache";
// Add new product API & get all products API
import {
  fetchAllProducts,
  addNewProducts,
  updateProducts,
  removeProduct,
} from "../httpServices/httpServices";

const localCache = [];

//Get All Products Action
// export async function getAllProduct() {
//   const res = await fetch(fetchAllProducts(0, 10), {
//     next: { revalidate: 3600 },
//   });
//   const resData = await res.json();
//   return (products = resData.products);
// }

// Get all products for pagination
export async function getProducts(page = 1, limit = 15) {
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
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
