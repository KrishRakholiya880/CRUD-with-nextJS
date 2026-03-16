"use client";

// Hooks
import React, { useEffect, useState, useCallback, useRef } from "react";
// Component
import DataCard from "../DataCard/DataCard"; // Import your card
// Actions
import {
  getProductsAction,
  searchProductsAction,
} from "@/app/httpServices/clientActions";

export default function LoadMore({ accessToken, userData, query }) {
  // states
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const skip = 15;

  // ref
  const observerTarget = useRef(null);

  // Load More Function
  const loadAllProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      let response;

      if (query) {
        console.log(`Searching more for: ${query}, Page: ${page}`);
        response = await searchProductsAction(query, page, skip);
      } else {
        console.log(`Loading more all products, Page: ${page}`);
        response = await getProductsAction(page, skip);
      }

      const newItems = response?.products || [];

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Load More Error:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, query]);

  // Scroll by IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadAllProducts();
        }
      },
      { threshold: 0.1 }, // Trigger when 100% of the target is visible
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadAllProducts, hasMore, loading]);

  // Scroll Listener by DOM
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (loading || !hasMore) return;

  //     const { scrollTop, clientHeight, scrollHeight } =
  //       document.documentElement;

  //     // Trigger when near bottom
  //     if (scrollTop + clientHeight >= scrollHeight - 200) {
  //       loadMoreProducts();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [loadMoreProducts, loading, hasMore]);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <DataCard
              key={`${product._id}-${index}`}
              id={product._id}
              image={product.productImage}
              name={product.productName}
              description={product.productDescription}
              category={product.productCategory}
              subCategory={product.productSubcategory}
              price={product.productPrice}
              accessToken={accessToken}
              userData={userData}
              priority={false}
            />
          ))}
        </div>
      </div>

      {hasMore && (
        <div
          ref={observerTarget}
          className="col-span-full h-4 w-full bg-transparent"
        />
      )}

      {/* Loading Spinner - Using col-span-full to make it take full width in grid */}
      {loading && (
        <div className="col-span-full flex justify-center p-4">
          <p className="text-blue-500 font-bold animate-pulse">
            Loading more products...
          </p>
        </div>
      )}

      {!accessToken ||
        (!hasMore && (
          <div className="col-span-full text-center p-4 text-gray-500">
            You've reached the end!
          </div>
        ))}
    </>
  );
}
