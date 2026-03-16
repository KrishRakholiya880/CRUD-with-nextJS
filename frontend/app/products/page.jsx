// Components
import DataCard from "../_components/DataCard/DataCard";
import LoadMore from "../_components/LoadMore/LoadMore";
// Get all products Action
import { getProductsAction } from "../httpServices/clientActions";
// Auth-actions
import { getCurrentUser, getToken } from "../auth-actions/auth-actions";

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
  // token & userData
  const accessToken = await getToken();
  const userData = await getCurrentUser();
  // Get all products
  const initialProducts = await getProductsAction();

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4">
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

        {!initialProducts?.products &&
          initialProducts?.products?.length === 0 && (
            <div className="flex flex-col items-center mt-20">
              <p className="text-3xl text-center text-gray-500">
                Product Not Found
              </p>
            </div>
          )}

        <LoadMore accessToken={accessToken} userData={userData} />
      </div>
    </main>
  );
}
