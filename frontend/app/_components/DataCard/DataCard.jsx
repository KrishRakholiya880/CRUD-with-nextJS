"use client";

// Image component
import Image from "next/image";
// Link
import Link from "next/link";
import { useRouter } from "next/navigation";
// Hooks
import { useEffect, useState } from "react";

export default function DataCard({
  id,
  image,
  title,
  description,
  category,
  rating,
  price,
  onRemove,
  token,
  userdata,
}) {
  // Router
  const router = useRouter();
  // State
  const [isVisible, setIsVisible] = useState(true);

  // Remove a product
  const removeProducts = async (id) => {
    setIsVisible(false);
    await onRemove(id);
  };

  if (!isVisible) return null;

  return (
    <Link
      href={`/products/${id}`}
      className="border rounded-xl p-5 m-2.5 w-[400px] h-auto space-y-6 text-lg">
      <div className="overflow-hidden text-center">
        <Image
          src={image}
          alt="productImages"
          width={250}
          height={250}
          className="object-cover mx-auto"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAUElEQVR4nO3OMRHAIAAAMcBkj8O/jxro8hMdEgWZzz7jf9btwDetQqvQKrQKrUKr0Cq0Cq1Cq9AqtAqtQqvQKrQKrUKr0Cq0Cq1Cq9AqtIoXooYBb1MYuvkAAAAASUVORK5CYII="
        />
      </div>
      <p>
        <b>Title: </b>
        {title.length > 15 ? title.slice(0, 14) + "..." : title}
      </p>
      <p>
        <b>Description: </b>
        {description.length > 20
          ? description.slice(0, 19) + "..."
          : description}
      </p>
      <p>
        <b>Category: </b>
        {category}
      </p>
      <p>
        <b>Rating: </b>
        {rating}
      </p>
      <p className="mb-4">
        <b>Price: </b>
        {price}
      </p>
      {token && userdata.role === "admin" && (
        <div className="flex items-center gap-3">
          <button
            className="px-10 py-4 text-xl bg-green-500 border-2 border-green-500 rounded-3xl transition-all duration-300 hover:bg-transparent cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/?edit=${id}`, { scroll: false });
            }}>
            Edit
          </button>
          <button
            className="px-10 py-4 text-xl bg-red-500 border-2 border-red-500 rounded-3xl transition-all duration-300 hover:bg-transparent cursor-pointer"
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
