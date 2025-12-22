// Components
import ProductFeed from "../_components/ProductFeed/ProductFeed";
// Get all products Action
import { getProducts } from "../action/ProductActions";

export const dynamic = "force-static";
export const revalidate = 60;

// metadata
export const metadata = {
  title: "Products",
  description:
    "Explore our catalog of top-rated products. Electronics, fashion, and more with fast delivery.",
  keywords: [
    "myShop",
    "online-shop",
    "online-shopping",
    "e-commerce site",
    "products",
    "all products",
    "electronics",
    "fashion",
  ],
  alternates: {
    canonical: "/products",
  },
};

export default async function Products() {
  // Get all products
  const initialProducts = await getProducts(1);

  return (
    <main>
      <div className="max-w-9xl mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl text-center mb-2">
            Shop Our Latest Products
          </h1>
          <p className="max-w-xl mx-auto text-center">
            Explore our comprehensive catalog featuring top-rated electronics,
            fashion, and lifestyle essentials. Discover high-quality products
            curated just for you at unbeatable prices.
          </p>
        </div>
        {/* Product Display */}
        <ProductFeed initialProducts={initialProducts} />
      </div>
    </main>
  );
}
