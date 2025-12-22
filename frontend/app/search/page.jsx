import React from "react";
// API
import { searchProducts } from "../httpServices/httpServices";
// Component
import DataCard from "../_components/DataCard/DataCard";

export default async function page({ searchParams }) {
  const { q } = await searchParams;

  const res = await fetch(searchProducts(q));
  const resData = await res.json();
  const searchedProducts = resData.products;

  if (searchedProducts.length === 0)
    return <p className="mt-96 text-center text-3xl">Product Not Found</p>;

  return (
    <main className="flex flex-col items-center w-full mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchedProducts.map((product) => (
          <DataCard
            key={product.id}
            id={product.id}
            image={product.images[0]}
            title={product.title}
            description={product.description}
            category={product.category}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
}
