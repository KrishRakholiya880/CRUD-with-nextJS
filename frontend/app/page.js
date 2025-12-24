// Components
import AddProductModal from "./_components/AddProductModal/AddProductModal";
// Actions
import { getProductsAction } from "./action/ProductActions";
// Get token & userdata
import { GetToken } from "./CookieAction/GetToken";
import { GetUserData } from "./CookieAction/GetUserData";
import ProductFeed from "./_components/ProductFeed/ProductFeed";

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
  "@type": "Organization", // or "WebSite"
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
  // Get all products
  const initialProducts = await getProductsAction(1);

  // searchParams
  const searchParam = await searchParams;
  const editId = searchParam?.edit;

  // Get the data of editId from products
  const productToEdit = editId
    ? initialProducts.find((product) => product.id === Number(editId))
    : null;

  // Get the token from cookie
  const token = await GetToken();
  const userdata = await GetUserData();

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
        {token && userdata.role === "admin" && (
          <AddProductModal productToEdit={productToEdit} />
        )}

        {/* Product Display */}
        <ProductFeed
          initialProducts={initialProducts}
          token={token}
          userdata={userdata}
        />
      </div>
    </main>
  );
}
