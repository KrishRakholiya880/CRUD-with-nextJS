"use client";

// Product actions
import {
  addProductAction,
  updateProductAction,
} from "@/app/httpServices/clientActions";

// Router
import { useRouter } from "next/navigation";
// Hooks
import React, { useEffect, useState } from "react";
// toastify
import { toast } from "react-toastify";
// X-mark Icon
import { HiMiniXMark } from "react-icons/hi2";

export default function AddProductModal({ productToEdit }) {
  // router
  const router = useRouter();
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    images: "",
    name: "",
    description: "",
    category: "",
    sub_category: "",
    price: "",
  });

  // useEffect
  useEffect(() => {
    if (productToEdit) {
      setIsOpen(true);
      setFormData({
        id: productToEdit._id,
        images: productToEdit.productImage,
        name: productToEdit.productName,
        description: productToEdit.productDescription,
        category: productToEdit.productCategory,
        sub_category: productToEdit.productSubcategory,
        price: productToEdit.productPrice,
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
        images: reader.result, // Removed the [ ] brackets. Now it's a String.
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result;

    try {
      if (formData.id) {
        result = await updateProductAction(formData);
      } else {
        result = await addProductAction(formData);
      }

      if (result?.status) {
        toast.success(result.message || "Product Added successfully!");
        handleClose();
      } else {
        toast.error(result?.error || "An unexpected error occurred");
      }
      router.refresh();
    } catch (error) {
      // Fallback for network failures
      toast.error("Network error. Please try again.");
      console.error("Form Submission Error:", error);
    }
  };

  return (
    <div>
      {/* Add Product Button */}
      <div className="my-4 text-center">
        <button
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          {formData.id ? "Edit Product" : "Add Product"}
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
                onClick={handleClose}>
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
                  <label htmlFor="productName">Product Name:</label>
                  <input
                    type="text"
                    id="productName"
                    name="name"
                    value={formData.name}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a name"
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
                  <label htmlFor="productSubcategory">
                    Product Subcategory:
                  </label>
                  <input
                    type="text"
                    id="productSubcategory"
                    name="sub_category"
                    value={formData.sub_category}
                    className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                    placeholder="Enter a subcategory"
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
