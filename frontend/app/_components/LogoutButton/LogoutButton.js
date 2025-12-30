"use client";

import { logout } from "@/app/auth-actions/auth-actions";
import { useRouter } from "next/navigation";
import React from "react";
// Remove token

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <button
      className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 transition-all duration-300 rounded-xl cursor-pointer"
      onClick={handleLogout}>
      Logout
    </button>
  );
}
