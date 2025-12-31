// Components
import DataCard from "../_components/DataCard/DataCard";
import LoadMore from "../_components/LoadMore/LoadMore";
// Get all products Action
import { getProductsAction } from "../action/ProductActions";

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
  const initialProducts = await getProductsAction(1);

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

        {/* THE HYBRID GRID */}
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialProducts &&
              initialProducts.map((product, index) => (
                <DataCard
                  key={product.id}
                  id={product.id}
                  image={product.images[0]}
                  title={product.title}
                  description={product.description}
                  category={product.category}
                  rating={product.rating}
                  price={product.price}
                  priority={index < 4}
                />
              ))}
            <LoadMore />
          </div>
        </div>
      </div>
    </main>
  );
}
