// Auth-action
import { getCurrentUser, getToken } from "@/app/auth-actions/auth-actions";
// Action
import { getProductsAction } from "@/app/httpServices/clientActions";
// Navigation
import { redirect } from "next/navigation";
// Component
import ProductTable from "../components/ProductTable/ProductTable";

export default async function AdminPage() {
  // accessToken & userData
  const accessToken = await getToken();
  const userData = await getCurrentUser();

  // getAllProducts
  const products = await getProductsAction();

  if (!accessToken || !userData) {
    redirect("/login");
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-10">
          <h2 className="text-4xl">Admin Dashboard</h2>
        </div>
        <div className="mt-10">
          <p className="text-lg text-center mb-3">All products</p>
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  );
}
