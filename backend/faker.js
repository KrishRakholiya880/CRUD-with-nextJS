const { faker } = require("@faker-js/faker");

/**
 * ProductFaker - A professional faker library for generating product data
 */
class ProductFaker {
  /**
   * Generate a single product object with realistic data
   * @returns {Object} Product object with image, name, description, category, subcategory, and price
   */
  static generateProduct() {
    const categories = [
      "Food - Canned Goods",
      "Food - Dairy",
      "Food - Beverages",
      "Food - Snacks",
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Sports & Outdoors",
      "Books & Media",
      "Health & Beauty",
    ];

    const subcategories = {
      "Food - Canned Goods": [
        "Soups & Broths",
        "Vegetables",
        "Fruits",
        "Meats",
        "Fish",
      ],
      "Food - Dairy": ["Milk", "Cheese", "Yogurt", "Butter", "Ice Cream"],
      "Food - Beverages": ["Soda", "Juice", "Water", "Coffee", "Tea"],
      "Food - Snacks": ["Chips", "Cookies", "Candy", "Nuts", "Crackers"],
      Electronics: ["Phones", "Laptops", "Tablets", "Accessories", "Gaming"],
      Clothing: ["Shirts", "Pants", "Dresses", "Shoes", "Accessories"],
      "Home & Garden": ["Furniture", "Decor", "Tools", "Plants", "Kitchen"],
      "Sports & Outdoors": [
        "Exercise Equipment",
        "Outdoor Gear",
        "Sportswear",
        "Team Sports",
        "Water Sports",
      ],
      "Books & Media": [
        "Fiction",
        "Non-Fiction",
        "Textbooks",
        "Movies",
        "Music",
      ],
      "Health & Beauty": [
        "Skincare",
        "Makeup",
        "Hair Care",
        "Supplements",
        "Personal Care",
      ],
    };

    const category = faker.helpers.arrayElement(categories);
    const subcategoryList = subcategories[category] || ["General"];
    const subcategory = faker.helpers.arrayElement(subcategoryList);

    return {
      productImage: faker.image.url({ width: 250, height: 300 }), // 'https://picsum.photos/seed/NWbJM2B/640/480',
      productName: faker.commerce.productName(),
      productDescription: faker.commerce.productDescription(),
      productCategory: category,
      productSubcategory: subcategory,
      productPrice: parseFloat(
        faker.commerce.price({ min: 99, max: 999.99, dec: 2 }),
      ),
    };
  }

  /**
   * Generate an array of product objects
   * @param {number} count - Number of products to generate
   * @returns {Array} Array of product objects
   */
  static generateProducts(count = 10) {
    if (!Number.isInteger(count) || count < 0) {
      throw new Error("Count must be a non-negative integer");
    }

    return Array.from({ length: count }, () => this.generateProduct());
  }

  /**
   * Generate products with optional filters
   * @param {Object} options - Generation options
   * @param {number} options.count - Number of products to generate (default: 10)
   * @param {string} options.category - Filter by specific category
   * @param {number} options.minPrice - Minimum price filter
   * @param {number} options.maxPrice - Maximum price filter
   * @returns {Array} Array of filtered product objects
   */
  static generateProductsWithFilters(options = {}) {
    const { count = 10, category, minPrice, maxPrice } = options;

    let products = this.generateProducts(count);

    if (category) {
      products = products.filter((p) => p.productCategory === category);
    }

    if (minPrice !== undefined) {
      products = products.filter((p) => p.productPrice >= minPrice);
    }

    if (maxPrice !== undefined) {
      products = products.filter((p) => p.productPrice <= maxPrice);
    }

    return products;
  }

  /**
   * Get all available categories
   * @returns {Array} Array of available product categories
   */
  static getAvailableCategories() {
    return [
      "Food - Canned Goods",
      "Food - Dairy",
      "Food - Beverages",
      "Food - Snacks",
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Sports & Outdoors",
      "Books & Media",
      "Health & Beauty",
    ];
  }

  /**
   * Get subcategories for a specific category
   * @param {string} category - The category to get subcategories for
   * @returns {Array} Array of subcategories for the given category
   */
  static getSubcategories(category) {
    const subcategories = {
      "Food - Canned Goods": [
        "Soups & Broths",
        "Vegetables",
        "Fruits",
        "Meats",
        "Fish",
      ],
      "Food - Dairy": ["Milk", "Cheese", "Yogurt", "Butter", "Ice Cream"],
      "Food - Beverages": ["Soda", "Juice", "Water", "Coffee", "Tea"],
      "Food - Snacks": ["Chips", "Cookies", "Candy", "Nuts", "Crackers"],
      Electronics: ["Phones", "Laptops", "Tablets", "Accessories", "Gaming"],
      Clothing: ["Shirts", "Pants", "Dresses", "Shoes", "Accessories"],
      "Home & Garden": ["Furniture", "Decor", "Tools", "Plants", "Kitchen"],
      "Sports & Outdoors": [
        "Exercise Equipment",
        "Outdoor Gear",
        "Sportswear",
        "Team Sports",
        "Water Sports",
      ],
      "Books & Media": [
        "Fiction",
        "Non-Fiction",
        "Textbooks",
        "Movies",
        "Music",
      ],
      "Health & Beauty": [
        "Skincare",
        "Makeup",
        "Hair Care",
        "Supplements",
        "Personal Care",
      ],
    };

    return subcategories[category] || [];
  }
}

// Example usage:
const products = ProductFaker.generateProductsWithFilters({
  count: 2000,
  minPrice: 100,
  maxPrice: 500,
});

const fs = require("fs");
fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
