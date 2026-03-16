"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Standard icons for e-commerce

export default function CartCount({ initialCount = 1, stock = 10, onChange }) {
  const [count, setCount] = useState(initialCount);

  // Increment Logic
  const increment = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);
      if (onChange) onChange(newCount);
    }
  };

  // Decrement Logic
  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      if (onChange) onChange(newCount);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // 1. Allow the user to clear the input so they can type a new number
    if (inputValue === "") {
      setCount("");
      return;
    }

    const value = parseInt(inputValue);

    // 2. Only update if it's a valid number
    if (!isNaN(value)) {
      // We allow typing numbers, but we cap them at the stock limit
      const clampedValue = Math.min(Math.max(value, 0), stock);

      setCount(clampedValue);
      if (onChange && clampedValue >= 1) {
        onChange(clampedValue);
      }
    }
  };

  // 3. Add an "onBlur" to ensure it never stays empty or 0 when the user clicks away
  const handleBlur = () => {
    if (count === "" || count < 1) {
      setCount(1);
      if (onChange) onChange(1);
    }
  };

  return (
    <div className="flex items-center rounded-lg w-fit overflow-hidden">
      {/* Decrement Button */}
      <button
        onClick={(e) => {
          decrement();
          e.stopPropagation();
          e.preventDefault();
        }}
        disabled={count <= 1}
        className="p-0.5 disabled:cursor-not-allowed border-2 border-gray-200 hover:bg-gray-300 rounded-full transition-colors"
        aria-label="Decrease quantity">
        <Minus
          size={18}
          className="light:text-black dark:text-white hover:text-black"
        />
      </button>

      {/* Input Field */}
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className="w-12 text-center font-semibold text-lg focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      {/* Increment Button */}
      <button
        onClick={(e) => {
          increment();
          e.stopPropagation();
          e.preventDefault();
        }}
        disabled={count >= stock}
        className="p-0.5 disabled:cursor-not-allowed border-2 border-gray-200 hover:bg-gray-300 rounded-full transition-colors"
        aria-label="Increase quantity">
        <Plus
          size={18}
          className="light:text-black dark:text-white hover:text-black"
        />
      </button>
    </div>
  );
}
