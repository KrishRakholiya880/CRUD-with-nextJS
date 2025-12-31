"use client";

import { useState } from "react";
// React-icons
import { FaBars, FaTimes } from "react-icons/fa";
// Link
import Link from "next/link";
// Image
import Image from "next/image";
// Components
import SearchProduct from "../SearchProduct/SearchProduct";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function MobileHeader({ token, currentUser }) {
  // State
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-black text-white dark:bg-white dark:text-black shadow-md">
      <div className="px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              fill
              alt="myShop-logo"
              className="object-contain"
            />
          </div>
          <span className="ml-2 font-bold text-lg">MyShop</span>
        </Link>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="px-4 pb-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-center p-2">
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="text-center p-2">
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-center p-2">
            About
          </Link>

          {currentUser && (
            <Link href="/user" onClick={() => setOpen(false)}>
              User
            </Link>
          )}

          {currentUser?.role === "admin" && (
            <Link href="/admin" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
          )}

          <SearchProduct />

          {token ? (
            <LogoutButton />
          ) : (
            <>
              <Link
                href="/signup"
                className="bg-blue-600 py-2 rounded text-center">
                Sign up
              </Link>
              <Link
                href="/login"
                className="bg-blue-600 py-2 rounded text-center">
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
