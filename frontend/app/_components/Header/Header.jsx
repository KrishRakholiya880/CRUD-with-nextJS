import React from "react";
// Link
import Link from "next/link";
// Image
import Image from "next/image";
// Components
import SearchProduct from "../SearchProduct/SearchProduct";
import Profile from "../Profile/Profile";
import MobileHeader from "./MobileMenu";
// auth-actions
import { getCurrentUser, getToken } from "@/app/auth-actions/auth-actions";
// lucide-react Icons
import { ShoppingCart } from "lucide-react";

export default async function Header() {
  const accessToken = await getToken();
  const userData = await getCurrentUser();

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block sticky top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center p-1">
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="myShop-logo"
                className="object-contain"
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white uppercase">
              My<span className="text-yellow-400">Shop</span>
            </span>
          </Link>

          {/* Navigation - Modern Minimalist */}
          <nav className="flex items-center bg-zinc-900/50 border border-zinc-800 rounded-full px-2 py-1">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all rounded-full hover:bg-zinc-800">
                {link.label}
              </Link>
            ))}

            {userData?.role === "ADMIN" && (
              <Link
                href="/admin"
                className="px-5 py-2 text-sm font-bold text-yellow-400 hover:text-yellow-300 border-l border-zinc-800 ml-2">
                Dashboard
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <SearchProduct />

            {accessToken ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/cart"
                  className="relative p-2.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all active:scale-90">
                  <ShoppingCart size={20} strokeWidth={2} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-[10px] font-black text-black rounded-full flex items-center justify-center ring-4 ring-black">
                    3
                  </span>
                </Link>
                <Profile />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-5 py-2.5 text-sm font-bold text-zinc-400 hover:text-yellow-400 hover:bg-zinc-900/50 rounded-xl transition-all duration-300 active:scale-95 uppercase tracking-tight">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2.5 text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-xl transition-all shadow-[0_0_20px_rgba(255,215,0,0.15)] active:scale-95">
                  Join Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <MobileHeader accessToken={accessToken} userData={userData} />
    </>
  );
}
