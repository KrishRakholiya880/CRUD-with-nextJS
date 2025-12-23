"use client";

// Actions
import { AddProductAction } from "@/app/action/ProductActions";
import { updateProductAction } from "@/app/action/ProductActions";
// Router
import { useRouter } from "next/navigation";
// Hooks
import React, { useEffect, useState } from "react";
// X-mark Icon
import { HiMiniXMark } from "react-icons/hi2";

export default function AddProductModal({ productToEdit }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    images: "",
    title: "",
    description: "",
    category: "",
    rating: "",
    price: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setIsOpen(true);
      setFormData({
        id: productToEdit.id,
        title: productToEdit.title,
        description: productToEdit.description,
        category: productToEdit.category,
        rating: productToEdit.rating,
        price: productToEdit.price,
        images: "",
      });
    }
  }, [productToEdit]);

  // handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // handleChange function for image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        images: [reader.result], // BASE64 STRING
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      images: "",
      title: "",
      description: "",
      category: "",
      rating: "",
      price: "",
    });
    router.push("/");
  };

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.id) {
      await updateProductAction(formData);
    } else {
      await AddProductAction(formData);
    }

    handleClose();
  };

  return (
    <div>
      {/* Add Product Button */}
      <div className="my-4 ml-52">
        <button
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          Add Product
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center w-full h-screen z-10">
          <div className="flex flex-col gap-5 relative w-[800px] h-auto overflow-y-auto text-black bg-white border-2 border-black rounded-2xl p-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">
                {formData.id ? "Edit Product" : "Add Product"}
              </h1>
              <button
                className="cursor-pointer text-black text-2xl"
                onClick={() => setIsOpen(!isOpen)}>
                <HiMiniXMark />
              </button>
            </div>
            <div className="modal-inputs">
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="productImg">Product Image:</label>
                  <input
                    type="file"
                    id="productImg"
                    name="images"
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Select an image"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="productTitle">Product Title:</label>
                  <input
                    type="text"
                    id="productTitle"
                    name="title"
                    value={formData.title}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a title"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="productDeacription">
                    Product Description:
                  </label>
                  <input
                    type="text"
                    id="productDeacription"
                    name="description"
                    value={formData.description}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a description"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="productCategory">Product Category:</label>
                  <input
                    type="text"
                    id="productCategory"
                    name="category"
                    value={formData.category}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a category"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="productRating">Product Rating:</label>
                  <input
                    type="number"
                    id="productRating"
                    name="rating"
                    value={formData.rating}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a rating"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="productPrice">Product Price:</label>
                  <input
                    type="number"
                    id="productPrice"
                    name="price"
                    value={formData.price}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a price"
                    onChange={handleChange}
                  />
                </div>
                <button className="bg-green-600 text-white w-full text-center mt-3 py-2 rounded-3xl cursor-pointer">
                  {formData.id ? "Edit Product" : "Add Product"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
