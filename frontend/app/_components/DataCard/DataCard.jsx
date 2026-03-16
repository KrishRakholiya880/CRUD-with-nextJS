"use client";

import { useState } from "react";
// Image
import Image from "next/image";
// Link
import Link from "next/link";
// Navigation
import { useRouter } from "next/navigation";
// toastify
import { toast } from "react-toastify";
// Action
import {
  deleteProductAction,
  addToCartAction,
} from "@/app/httpServices/clientActions";
// Component
import CartCount from "../CartCount/CartCount";
// lucide-react Icons
import { ShoppingBag, Trash2, Edit3 } from "lucide-react";

export default function DataCard({
  id,
  image,
  name,
  description,
  category,
  price,
  accessToken,
  userData,
}) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  // Logic remains the same (handleAddToCart, removeProduct)
  // handleAddToCart
  const handleAddToCart = async () => {
    if (!accessToken) {
      toast.error("Please login to add items to your cart!");
      router.push("/login");
      return;
    }
    try {
      const cartData = {
        userId: userData?.id,
        items: [
          {
            product: id,
            quantity: quantity,
            priceAddition: price,
          },
        ],
      };
      const result = await addToCartAction(cartData);
      toast.success(result?.message);
    } catch (error) {
      toast.error(error.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-[2rem] p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-zinc-800">
      {/* Category Badge */}
      <span className="absolute top-6 left-6 z-10 px-3 py-1 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-zinc-500 shadow-sm">
        {category}
      </span>

      <Link href={`/products/${id}`} className="block">
        {/* Image Container with "Blob" background effect on hover */}
        <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-gray-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src={image || "https://i.ibb.co/xtByxNyF/326cba82a449.png"}
            alt={name}
            fill
            className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="mt-5 px-2 space-y-1">
          <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 truncate group-hover:text-yellow-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed h-10">
            {description}
          </p>
        </div>
      </Link>

      {/* Footer Section: Price & Interaction */}
      <div className="mt-6 flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-2xl">
        <div className="flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">Price</span>
          <span className="text-xl font-black text-zinc-900 dark:text-white">
            ${price}
          </span>
        </div>

        {accessToken && userData?.role === "USER" ? (
          <div className="flex items-center gap-2">
            <CartCount
              initialCount={quantity}
              onChange={(val) => setQuantity(val)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              className="p-3 bg-yellow-400 hover:bg-black hover:text-white text-black rounded-xl transition-all duration-300 shadow-md active:scale-90">
              <ShoppingBag size={20} />
            </button>
          </div>
        ) : accessToken && userData?.role === "ADMIN" ? (
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push(`/?edit=${id}`);
              }}
              className="p-2 text-zinc-600 hover:text-blue-500 transition-colors">
              <Edit3 size={18} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeProduct(id);
              }}
              className="p-2 text-zinc-600 hover:text-red-500 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="text-xs font-bold text-yellow-600 uppercase underline">
            Login to Buy
          </Link>
        )}
      </div>
    </div>
  );
}
