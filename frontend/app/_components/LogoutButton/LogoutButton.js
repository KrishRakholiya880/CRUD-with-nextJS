"use client";

import React from "react";
// Remove token
import { RemoveToken } from "@/app/CookieAction/RemoveToken";

export default function LogoutButton() {
  const handleLogout = async () => {
    await RemoveToken();
  };
  return (
    <button
      className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-xl cursor-pointer"
      onClick={handleLogout}>
      Logout
    </button>
  );
}
