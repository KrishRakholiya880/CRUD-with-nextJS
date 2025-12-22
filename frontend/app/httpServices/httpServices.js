const BASE_URL_PRODUCTS = "https://dummyjson.com/product";
const BASE_URL_USERS = "http://localhost:5000/api/auth";
const BASE_URL_ADMIN = "http://localhost:5000/api";

// Product APIs

// 1. Fetch All Products
export const fetchAllProducts = (skip, limit) => {
  return `${BASE_URL_PRODUCTS}?skip=${skip}&limit=${limit}`;
};

// 2. Remove a Product
export const removeProduct = (id) => {
  return `${BASE_URL_PRODUCTS}/${id}`;
};

// 3. Add New Product
export const addNewProducts = () => {
  return `${BASE_URL_PRODUCTS}/add`;
};

// 4. Search Product
export const searchProducts = (productName) => {
  return `${BASE_URL_PRODUCTS}/search?q=${productName}`;
};

// 5. Update Product
export const updateProducts = (id) => {
  return `${BASE_URL_PRODUCTS}/${id}`;
};

// Users APIs

// 1. Signup user
export const signupAPI = () => {
  return `${BASE_URL_USERS}/register`;
};

// 2. Login User
export const loginAPI = () => {
  return `${BASE_URL_USERS}/login`;
};

// Admin APIs
export const adminProtected = () => {
  return `${BASE_URL_ADMIN}/protected/admin`;
};

// Admin APIs
export const userProtected = () => {
  return `${BASE_URL_ADMIN}/protected/user`;
};
