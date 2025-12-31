// Components
import AddProductModal from "./_components/AddProductModal/AddProductModal";
import DataCard from "./_components/DataCard/DataCard";
import LoadMore from "./_components/LoadMore/LoadMore";
// Actions
import { getProductsAction } from "./action/ProductActions";
// Auth-actions
import { getCurrentUser, getToken } from "./auth-actions/auth-actions";

// Metadata
export const metadata = {
  title: "Home || MyShop E-commerce store",
  description:
    "Welcome to MyShop! Discover the latest trends in fashion, high-performance electronics, and home essentials. Free shipping on orders over $50.",
  keywords: [
    "Online Shopping",
    "Electronics Store",
    "Fashion",
    "Discount Shopping",
    "MyShop",
  ],
  alternates: {
    canonical: "/",
  },
};

// Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Website", // or "Organization"
  name: "MyShop",
  url: "https://myshop.com",
  logo: "https://myshop.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-401-555-1212",
    contactType: "Customer service",
  },
};

export default async function Home({ searchParams }) {
  // token & currentUser
  const token = await getToken();
  const currentUser = await getCurrentUser();

  // Get all products
  const initialProducts = await getProductsAction(1);

  // searchParams
  const searchParam = await searchParams;
  const editId = searchParam?.edit;

  // Get the data of editId from products
  const productToEdit = editId
    ? initialProducts.find((product) => product.id === Number(editId))
    : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-9xl mx-auto px-4">
        <div className="my-8">
          <h1 className="text-center text-4xl mb-3">Welcome to MyShop</h1>
          <p className="max-w-xl mx-auto text-center">
            Welcome to MyShop! Discover the latest trends in fashion,
            high-performance electronics, and home essentials.
          </p>
        </div>

        {/* Add Product */}
        {token && currentUser?.role === "admin" && (
          <AddProductModal productToEdit={productToEdit} />
        )}

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
                  token={token}
                  currentUser={currentUser}
                  priority={index < 4}
                />
              ))}
            <LoadMore token={token} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </main>
  );
}
