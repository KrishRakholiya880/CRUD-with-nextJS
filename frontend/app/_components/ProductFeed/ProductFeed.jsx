"use client";

import React, { useCallback, useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";
import {
  getProductsAction,
  resetLocalCache,
} from "@/app/action/ProductActions";
import { usePathname } from "next/navigation";

export default function ProductFeed({ initialProducts, token, currentUser }) {
  // States
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const pathname = usePathname();

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

    // To show a newly added product when submit add button
    setProducts(initialProducts);
  }, [initialProducts]);

  // Function to load more
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextPage = page + 1;

    // fetch new data
    const newProducts = await getProductsAction(nextPage);

    if (newProducts.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...newProducts]);
      setPage(nextPage);

      window.history.replaceState(null, "", `${pathname}?page=${nextPage}`);
    }

    setLoading(false);
  }, [page, loading, hasMore]);

  // Scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;

      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore, loading, hasMore]);

  return (
    <main className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products &&
          products?.map((product, index) => (
            <DataCard
              key={`${product.id} - ${index}`}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              category={product.category}
              rating={product.rating}
              price={product.price}
              token={token}
              currentUser={currentUser}
              priority={index < 4}
            />
          ))}
      </div>
      <div>
        {loading && (
          <p className="text-blue-500 font-bold animate-pulse">
            Loading more items...
          </p>
        )}
      </div>
    </main>
  );
}
