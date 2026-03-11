module.exports = {
  // Auth
  TOKEN_REQUIRED: {
    httpStatusCode: 404,
    body: {
      code: "required",
      message: "Token required!!!",
    },
  },
  ACCESS_DENIED: {
    httpStatusCode: 403,
    body: {
      code: "forbidden",
      message: "Access denied!!!",
    },
  },
  ACCESS_TOKEN_REQUIRED: {
    httpStatusCode: 403,
    body: {
      code: "token_required",
      message: "AccessToken required!!!",
    },
  },
  INVALID_ACCESS_TOKEN: {
    httpStatusCode: 401,
    body: {
      code: "invalid",
      message: "Access token is not valid or expired!!!",
    },
  },
  INVALID_REFRESH_TOKEN: {
    httpStatusCode: 401,
    body: {
      code: "invalid",
      message: "Refresh token is not valid or expired!!!",
    },
  },
  USER_EXIST: {
    httpStatusCode: 409,
    body: {
      code: "duplicate",
      message: "User already exist!!!",
    },
  },
  EMAIL_NOT_FOUND: {
    httpStatusCode: 404,
    body: {
      code: "not_found",
      message: "Email not found!!!",
    },
  },
  USER_NOT_FOUND: {
    httpStatusCode: 404,
    body: {
      code: "not_found",
      message: "User not found!!!",
    },
  },
  INVALID_PASSWORD: {
    httpStatusCode: 400,
    body: {
      code: "invalid",
      message: "Invalid password!!!",
    },
  },

  // Products
  PRODUCT_NOT_FOUND: {
    httpStatusCode: 404,
    body: {
      code: "not_found",
      message: "Product not found!!!",
    },
  },

  INVALID_PRODUCT_ID: {
    httpStatusCode: 400,
    body: {
      code: "invalid",
      message: "Invalid productId!!!",
    },
  },

  // Cart
  PRODUCT_EXIST_IN_CART: {
    httpStatusCode: 409,
    body: {
      code: "duplicate",
      message: "Product is already exist in cart!!!",
    },
  },

  CART_NOT_FOUND: {
    httpStatusCode: 404,
    body: {
      code: "not_found",
      message: "Cart not found!!!",
    },
  },
};
