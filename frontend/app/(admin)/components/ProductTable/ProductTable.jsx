"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
// Image
import Image from "next/image";
// lucide-react Icons
import { X } from "lucide-react";
// Action
import { getProductsAction } from "@/app/httpServices/clientActions";

const ProductTable = ({ products }) => {
  const productData = products?.products;

  // state
  const [nextProducts, setNextProducts] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);
  const skip = 15;

  const loadMoreData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await getProductsAction(page, skip);
      const newItems = response?.products || [];

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setNextProducts((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Load More Error:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreData();
        }
      },
      { threshold: 0.1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMoreData, hasMore, loading]);

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-sm uppercase tracking-wider">
            <th className="p-5 font-semibold">Sr. No.</th>
            <th className="p-5 text-left font-semibold">Image</th>
            <th className="p-5 text-left font-semibold">Product Name</th>
            <th className="p-5 font-semibold text-center">Category</th>
            <th className="p-5 font-semibold text-center">Price</th>
            <th className="p-5"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {productData?.map((item, idx) => (
            <tr
              key={item._id || idx}
              className="group hover:bg-blue-50/30 transition-colors duration-200">
              {/* Sr No. */}
              <td className="p-5 text-center text-gray-400 font-medium text-sm">
                {String(idx + 1).padStart(2, "0")}
              </td>

              {/* Image Column */}
              <td className="p-5">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={item?.productImage}
                    alt={item?.productName}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>

              {/* Name & Description Column */}
              <td className="p-5 text-left max-w-[300px]">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-500 text-lg leading-tight mb-1">
                    {item?.productName}
                  </span>
                  <span className="text-sm line-clamp-1">
                    {item?.productDescription}
                  </span>
                </div>
              </td>

              {/* Category Column */}
              <td className="p-5 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 uppercase">
                  {item?.productCategory}
                </span>
              </td>

              {/* Price Column */}
              <td className="p-5 text-center font-medium text-gray-500">
                ${item?.productPrice}
              </td>

              {/* Action Column */}
              <td className="p-5 text-right">
                <button
                  className="inline-flex items-center justify-center w-9 h-9 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all active:scale-90"
                  title="Remove Item">
                  <X size={20} strokeWidth={2.5} />
                </button>
              </td>
            </tr>
          ))}
          {nextProducts?.map((item, idx) => {
            const serialNumber = (productData.length || 0) + (idx + 1);
            return (
              <tr
                key={item._id || idx}
                className="group hover:bg-blue-50/30 transition-colors duration-200">
                {/* Sr No. */}
                <td className="p-5 text-center text-gray-400 font-medium text-sm">
                  {String(serialNumber).padStart(2, "0")}
                </td>

                {/* Image Column */}
                <td className="p-5">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={item?.productImage}
                      alt={item?.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                {/* Name & Description Column */}
                <td className="p-5 text-left max-w-[300px]">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-500 text-lg leading-tight mb-1">
                      {item?.productName}
                    </span>
                    <span className="text-sm line-clamp-1">
                      {item?.productDescription}
                    </span>
                  </div>
                </td>

                {/* Category Column */}
                <td className="p-5 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 uppercase">
                    {item?.productCategory}
                  </span>
                </td>

                {/* Price Column */}
                <td className="p-5 text-center font-medium text-gray-500">
                  ${item?.productPrice}
                </td>

                {/* Action Column */}
                <td className="p-5 text-right">
                  <button
                    className="inline-flex items-center justify-center w-9 h-9 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all active:scale-90"
                    title="Remove Item">
                    <X size={20} strokeWidth={2.5} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div ref={observerTarget} className="my-4 text-center">
        {loading && (
          <p className="text-blue-500 font-bold text-md">
            Loading more products...
          </p>
        )}

        {!hasMore && accessToken && products.length > 0 && (
          <p className="text-gray-400 text-sm italic">
            You've reached the end of the catalog.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
