"use client";

import React from "react";
// auth-action
import { logout } from "@/app/auth-actions/auth-actions";
// Navigation
import { useRouter } from "next/navigation";
// toastify
import { toast } from "react-toastify";

export default function LogoutButton({ setOpen }) {
  // router
  const router = useRouter();
  // handleLogout
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout successful!!!");
      if (setOpen) {
        setOpen(false);
      }
      router.push("/login");
    } catch (error) {
      toast.success(error.message);
    }
  };
  return (
    <button
      className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 transition-all duration-300 rounded-xl cursor-pointer"
      onClick={handleLogout}>
      Logout
    </button>
  );
}
