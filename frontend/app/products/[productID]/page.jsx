// Image
import Image from "next/image";
// Link
import Link from "next/link";
// Action
import { getSingleProductAction } from "@/app/httpServices/clientActions";
// Auth-action
import { getCurrentUser, getToken } from "@/app/auth-actions/auth-actions";
// lucide-react Icons
import {
  ChevronLeft,
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

async function getProduct(productID) {
  return await getSingleProductAction(productID);
}

export default async function ProductID({ params }) {
  const { productID } = await params;
  const productData = await getProduct(productID);

  if (!productData || productData instanceof Error || !productData._id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-in fade-in zoom-in duration-500">
        <h1 className="text-9xl font-black text-gray-100 dark:text-zinc-800">
          404
        </h1>
        <p className="text-2xl text-gray-500 font-light -mt-8 mb-6">
          Product Not Found
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-black text-white rounded-full hover:bg-zinc-800 transition-all">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb / Back Navigation */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors group">
        <ChevronLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm font-medium">Back to collection</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Image Gallery Section (Sticky) */}
        <div className="lg:col-span-7 sticky top-24">
          <div className="relative aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden group">
            <Image
              src={productData.productImage}
              fill
              priority
              className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
              alt={productData.productName}
            />
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-white text-zinc-900 backdrop-blur-sm rounded-full text-xs font-bold shadow-sm uppercase tracking-tighter">
                {productData.productCategory}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Product Details Section */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-yellow-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-400">
                (4.8 / 5.0)
              </span>
            </div>

            <h1 className="text-5xl font-black text-zinc-900 dark:text-white leading-tight">
              {productData.productName}
            </h1>

            <div className="flex items-baseline gap-4">
              <p className="text-4xl font-bold text-zinc-900 dark:text-white">
                ${productData.productPrice}
              </p>
              <span className="text-zinc-400 line-through text-xl">
                ${(productData.productPrice * 1.2).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="space-y-4 border-y border-zinc-100 dark:border-zinc-800 py-8">
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              Description
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed break-words whitespace-pre-wrap">
              {productData.productDescription}
            </p>
            <p className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm font-medium text-zinc-600 max-w-full truncate">
              Subcategory: {productData.productSubcategory}
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <Truck size={20} className="text-zinc-400" />
              <span className="text-xs font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <ShieldCheck size={20} className="text-zinc-400" />
              <span className="text-xs font-medium">1 Year Warranty</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-5 bg-black dark:bg-white dark:text-black text-white rounded-[2rem] font-bold text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95 shadow-xl">
            <ShoppingBag size={24} />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
