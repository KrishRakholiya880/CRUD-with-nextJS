"use client";

// State
import { useState } from "react";
// Components
import DataCard from "../DataCard";
// import AddProductModal from "../addProductModal/addProductModal";
// Add new product API
import { addNewProducts } from "@/app/httpServices/httpServices";

export default function ProductStateWrapper({ initialProducts }) {
  const [product, setProduct] = useState(initialProducts);
  const [isOpen, setsetIsOpen] = useState(false);

  // Add New Product
  const addNewProduct = async (productData) => {
    const res = await fetch(addNewProducts(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    const resData = await res.json();
    console.log(resData);
    setProduct((prev) => [resData, ...prev]);
  };

  return (
    <>
      {/* Add product */}
      <div className="mt-10 ml-20">
        <button
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl cursor-pointer"
          onClick={() => setsetIsOpen(!isOpen)}>
          Add Product
        </button>
      </div>

      {/* AddProductModal */}
      {isOpen && (
        <AddProductModal
          onSubmit={addNewProduct}
          onClose={() => setsetIsOpen(!isOpen)}
        />
      )}

      {/* Product Display */}
      {/* <div className="flex flex-wrap justify-center items-center">
        {product.map((product) => (
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
      </div> */}
    </>
  );
}
