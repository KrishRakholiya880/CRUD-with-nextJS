"use client";

// Image component
import Image from "next/image";
// Link
import Link from "next/link";
import { useRouter } from "next/navigation";
// Hooks
import { useState } from "react";

export default function DataCard({
  id,
  image,
  title,
  description,
  category,
  rating,
  price,
  token,
  currentUser,
}) {
  // Router
  const router = useRouter();
  // State
  const [isVisible, setIsVisible] = useState(true);

  // Remove a product
  const removeProducts = async (id) => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Link
      href={`/products/${id}`}
      className="border rounded-2xl p-4 lg:p-5 space-y-4 text-sm lg:text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black">
      <div className="overflow-hidden text-center">
        <Image
          src={image}
          alt="productImages"
          width={250}
          height={250}
          className="object-cover mx-auto w-[180px] h-[180px] md:w-[220px] md:h-[220px] transition-transform duration-300 hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAUElEQVR4nO3OMRHAIAAAMcBkj8O/jxro8hMdEgWZzz7jf9btwDetQqvQKrQKrUKr0Cq0Cq1Cq9AqtAqtQqvQKrQKrUKr0Cq0Cq1Cq9AqtIoXooYBb1MYuvkAAAAASUVORK5CYII="
        />
      </div>

      <p className="truncate">
        <b>Title:</b> {title.length > 15 ? title.slice(0, 14) + "..." : title}
      </p>

      <p>
        <b>Description:</b>{" "}
        {description.length > 20
          ? description.slice(0, 19) + "..."
          : description}
      </p>

      <p>
        <b>Category:</b> {category}
      </p>

      <p>
        <b>Rating:</b> ⭐ {rating}
      </p>

      <p className="font-semibold text-lg">
        <b>Price:</b> ${price}
      </p>

      {token && currentUser?.role === "admin" && (
        <div className="flex flex-col sm:flex-row gap-3 pt-3">
          <button
            className="flex-1 py-2 text-sm lg:text-base bg-green-500 border-2 border-green-500 rounded-xl transition-all hover:bg-transparent cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/?edit=${id}`, { scroll: false });
            }}>
            Edit
          </button>

          <button
            className="flex-1 py-2 text-sm lg:text-base bg-red-500 border-2 border-red-500 rounded-xl transition-all hover:bg-transparent cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              removeProducts(id);
            }}>
            Delete
          </button>
        </div>
      )}
    </Link>
  );
}
