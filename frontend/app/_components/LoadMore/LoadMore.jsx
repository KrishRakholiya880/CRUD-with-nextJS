"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import DataCard from "../DataCard/DataCard"; // Import your card
import {
  getProductsAction,
  resetLocalCache,
} from "@/app/action/ProductActions";

export default function LoadMore({ token, currentUser }) {
  // states
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2); // Start from page 2
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // pathname
  const pathname = usePathname();

  // ref
  const observerTarget = useRef(null);

  // Load More Function
  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newProducts = await getProductsAction(page);

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...newProducts]);
        setPage((prev) => prev + 1);
        window.history.replaceState(null, "", `${pathname}?page=${page}`);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, pathname]);

  useEffect(() => {
    // For set the URL to "/" when page loaded
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", pathname);
    }

    // Clearing the cache to disappear new product
    const clearCache = async () => {
      await resetLocalCache();
      console.log("Server cache cleared!");
    };
    clearCache();
  }, []);

  // Scroll by IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 } // Trigger when 100% of the target is visible
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMoreProducts, hasMore, loading]);

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
      {/* Render the NEW products here */}
      {products.map((product, index) => (
        <DataCard
          key={`${product.id}-${index}-loaded`}
          id={product.id}
          image={product.images[0]}
          title={product.title}
          description={product.description}
          category={product.category}
          rating={product.rating}
          price={product.price}
          token={token}
          currentUser={currentUser}
          priority={false} // Lazy load images for these
        />
      ))}

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
            Loading more items...
          </p>
        </div>
      )}

      {!hasMore && (
        <div className="col-span-full text-center p-4 text-gray-500">
          You've reached the end!
        </div>
      )}
    </>
  );
}
