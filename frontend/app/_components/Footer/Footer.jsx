import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* MAIN FLEX */}
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* LOGO */}
          <div className="w-full md:w-6/12 lg:w-4/12 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="MyShop Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">MyShop</span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-600 w-full lg:max-w-xs">
              Your trusted online store for quality products and great deals.
            </p>
          </div>

          {/* LINKS */}
          <div className="w-full md:w-6/12 lg:w-4/12 flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-500 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-500 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </div>

          {/* SUBSCRIBE */}
          <div className="w-full lg:w-4/12 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-sm text-gray-400 dark:text-gray-600 max-w-sm">
              Get updates about new products and exclusive offers.
            </p>

            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-xl outline-none text-black border border-gray-300"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-gray-700 dark:border-gray-300 text-center text-sm text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
