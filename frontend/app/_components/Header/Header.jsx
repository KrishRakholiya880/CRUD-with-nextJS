// SAME imports as before (no change)
import React from "react";
// Cookie Actions
import { GetToken } from "@/app/CookieAction/GetToken";
import { GetUserData } from "@/app/CookieAction/GetUserData";
// Link
import Link from "next/link";
// Image
import Image from "next/image";
// Component
import SearchProduct from "../SearchProduct/SearchProduct";
import LogoutButton from "../LogoutButton/LogoutButton";
import MobileHeader from "./MobileMenu";

export default async function Header() {
  const token = await GetToken();
  const userdata = await GetUserData();

  return (
    <>
      <header className="hidden lg:block sticky top-0 w-full z-50 dark:bg-white dark:text-black bg-black text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 py-2 lg:py-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl flex items-center">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  fill
                  alt="myShop-logo"
                  className="object-contain"
                />
              </div>
              <span className="ml-2 font-bold">MyShop</span>
            </Link>
            <nav className="flex items-center">
              <Link
                className="p-4 hover:text-blue-500 transition-colors duration-300"
                href="/">
                Home
              </Link>
              <Link
                className="p-4 hover:text-blue-500 transition-colors duration-300"
                href="/products">
                Products
              </Link>
              <Link
                className="p-4 hover:text-blue-500 transition-colors duration-300"
                href="/about">
                About
              </Link>
              {userdata && (
                <Link
                  className="p-4 hover:text-blue-500 transition-colors duration-300"
                  href="/user">
                  User
                </Link>
              )}
              {userdata?.role === "admin" && (
                <Link
                  className="p-4 hover:text-blue-500 transition-colors duration-300"
                  href="/admin">
                  Dashboard
                </Link>
              )}
            </nav>
            <div className="flex items-center gap-3">
              <SearchProduct />
              {token ? (
                <LogoutButton />
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg">
                    Sign up
                  </Link>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileHeader token={token} userdata={userdata} />
    </>
  );
}
