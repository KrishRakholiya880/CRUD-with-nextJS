// Components
import AddProductModal from "./_components/AddProductModal/AddProductModal";
import LoadMore from "./_components/LoadMore/LoadMore";
// Actions
import { getProductsAction } from "./httpServices/clientActions";
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
  const accessToken = await getToken();
  const userData = await getCurrentUser();

  // Get all products
  const initialProducts = await getProductsAction();

  // searchParams
  const searchParam = await searchParams;
  const editId = searchParam?.edit;

  // Get the data of editId from products
  const productToEdit = editId
    ? initialProducts?.products.find((product) => product._id === editId)
    : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-8">
          <h1 className="text-center text-4xl mb-3">Welcome to MyShop</h1>
          <p className="max-w-xl mx-auto text-center">
            Welcome to MyShop! Discover the latest trends in fashion,
            high-performance electronics, and home essentials.
          </p>
        </div>

        {/* Login Modal */}
        {/* {!accessToken && !userData && <LoginModal />} */}

        {/* Add Product */}
        {accessToken && userData?.role === "ADMIN" && (
          <AddProductModal productToEdit={productToEdit} />
        )}

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
