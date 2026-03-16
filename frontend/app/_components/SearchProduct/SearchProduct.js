"use client";

// Router
import { useRouter } from "next/navigation";
// State
import React, { useEffect, useRef, useState } from "react";
// Search-icon
import { IoSearchOutline } from "react-icons/io5";

export default function SearchProduct() {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  // router
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchProduct.trim()) {
      router.push(`/search?q=${searchProduct}`);
    }
    setIsOpen(false);
    setSearchProduct("");
  };

  // Ref
  const searchRef = useRef(null);

  // Effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={searchRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <IoSearchOutline
          size={40}
          strokeWidth={2}
          className="p-2.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all active:scale-90"
        />
      </div>
      {isOpen && (
        <div className="absolute top-16 -right-20 w-64 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="p-2 pr-10 bg-black border-2 border-white rounded-xl outline-none w-full"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
            />
            <button type="submit" name="submit">
              <IoSearchOutline className="absolute top-2.5 right-3 text-2xl cursor-pointer" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
