const BASE_URL_PRODUCTS = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
const BASE_URL_AUTH = `${process.env.NEXT_PUBLIC_BASE_URL}/auth`;
const BASE_URL_CART = `${process.env.NEXT_PUBLIC_BASE_URL}/cart`;
const BASE_URL_ADMIN = `http://localhost:5000/api`;

export const buildURLProduct = (endPoint) => {
  return `${BASE_URL_PRODUCTS}${endPoint}`;
};
export const buildURLUser = (endPoint) => {
  return `${BASE_URL_AUTH}${endPoint}`;
};
export const buildURLCart = (endPoint) => {
  return `${BASE_URL_CART}${endPoint}`;
};

// Product APIs

// 1. Fetch All Products
export const fetchAllProducts = (page, limit) => {
  return buildURLProduct(`/?page=${page}&limit=${limit}`);
};

// 2. Fetch Single Product data
export const fetchSingleProductData = (id) => {
  return buildURLProduct(`/item/${id}`);
};

// 2. Remove a Product
export const removeProduct = (id) => {
  return buildURLProduct(`/item/${id}`);
};

// 3. Add New Product
export const addNewProducts = () => {
  return buildURLProduct(`/`);
};

// 4. Search Product
export const searchProducts = (query, page, limit) => {
  return buildURLProduct(`/?q=${query}&page=${page}&limit=${limit}`);
};

// 5. Update Product
export const updateProducts = (id) => {
  return buildURLProduct(`/item/${id}`);
};

// Auth APIs
// 1. Signup user
export const signupAPI = () => {
  return buildURLUser(`/signup`);
};

// 2. Login User
export const signinAPI = () => {
  return buildURLUser(`/signin`);
};

// 3. Renew Access Token
export const renewAccessToken = () => {
  return buildURLUser(`/renew-access-token`);
};

// Admin APIs
export const adminProtected = () => {
  return `${BASE_URL_ADMIN}/protected/admin`;
};

// User APIs
export const userProtected = () => {
  return `${BASE_URL_ADMIN}/protected/user`;
};

// Cart APIs
// 1. getCartData API
export const getCartData = (userId) => {
  return buildURLCart(`/${userId}`);
};

// 2. addToCart API
export const addToCart = () => {
  return buildURLCart("/");
};

// 3. removeFromCart
export const removeFromCart = (cartId, productId) => {
  return buildURLCart(`/${cartId}/${productId}`);
};
