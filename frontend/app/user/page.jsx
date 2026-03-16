// Axios
import axios from "axios";
// Component
import LogoutButton from "../_components/LogoutButton/LogoutButton";
// API
import { userProtected } from "../httpServices/httpServices";
// Auth-actions
import { getCurrentUser, getToken } from "../auth-actions/auth-actions";
// Navigation
import { redirect } from "next/navigation";

export default async function UserPage() {
  const accessToken = await getToken();
  const userData = await getCurrentUser();

  if (!accessToken || !userData) {
    redirect("/login");
    return;
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-20">
      <h2 className="text-3xl">User Dashboard</h2>
      <p>
        Welcome <strong>{userData?.username}</strong> ({userData?.role})
      </p>
      <LogoutButton />
    </div>
  );
}
