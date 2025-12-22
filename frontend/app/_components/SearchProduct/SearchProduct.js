"use client";

// Router
import { useRouter } from "next/navigation";
// State
import React, { useState } from "react";
// Search-icon
import { IoSearchOutline } from "react-icons/io5";

export default function SearchProduct() {
  const [searchProduct, setSearchProduct] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchProduct.trim()) {
      router.push(`/search?q=${searchProduct}`);
    }
    setSearchProduct("");
  };

  return (
    <div>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="p-2 pr-10 border border-black rounded-xl outline-none w-full"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <button type="submit" name="submit">
          <IoSearchOutline className="absolute top-2.5 right-3 text-2xl cursor-pointer" />
        </button>
      </form>
    </div>
  );
}
