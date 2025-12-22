import React from "react";
// Search Product Component
import SearchProduct from "../SearchProduct/SearchProduct";
// Logout Component
import LogoutButton from "../LogoutButton/LogoutButton";
// Get token & userdata
import { GetToken } from "@/app/CookieAction/GetToken";
import { GetUserData } from "@/app/CookieAction/GetUserData";
// Link
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  const token = await GetToken();
  const userdata = await GetUserData();
  return (
    <div className="sticky top-0 w-full z-50 dark:bg-white dark:text-black bg-black text-white">
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-2/12 px-3 text-center lg:text-start">
            <Link href={"/"} className="text-3xl flex items-center">
              <Image
                src={"/logo.png"}
                width={80}
                height={80}
                alt="myShop-logo"
              />
              <span className="ml-2 font-bold">MyShop</span>
            </Link>
          </div>
          <div className="w-full sm:w-6/12 px-3 text-center">
            <div className="navbar">
              <Link className="inline-block text-lg p-4" href={"/"} replace>
                Home
              </Link>
              <Link className="inline-block text-lg p-4" href={"/products"}>
                Products
              </Link>
              <Link className="inline-block text-lg p-4" href={"/about"}>
                About
              </Link>
              {userdata && (
                <Link className="inline-block text-lg p-4" href={"/user"}>
                  User
                </Link>
              )}
              {userdata && userdata.role === "admin" && (
                <Link className="inline-block text-lg p-4" href={"/admin"}>
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="w-full sm:w-4/12 px-3 flex justify-end items-center space-x-2 text-end">
            <SearchProduct />
            {token ? (
              <LogoutButton />
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href={"/signup"}
                  className="px-4 py-2 text-black bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl cursor-pointer">
                  Sign up
                </Link>
                <Link
                  href={"/login"}
                  className="px-4 py-2 text-black bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl cursor-pointer">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
