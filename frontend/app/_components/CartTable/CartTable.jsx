"use client";

import React from "react";
// Image
import Image from "next/image";
// lucide-react Icons
import { X } from "lucide-react";
// toast
import { toast } from "react-toastify";
// Action
import { removeFromCartAction } from "@/app/httpServices/clientActions";
// Naivigation
import { useRouter } from "next/navigation";

const CartTable = ({ cartData }) => {
  // router
  const router = useRouter();

  // remove from cart
  const handleRemove = async (productId) => {
    const data = { cartId: cartData._id, productId };

    try {
      await removeFromCartAction(data);
      router.refresh();
      toast.success("Product removed!");
    } catch (err) {
      console.error("Delete Error:", err);
      toast.error("Failed to remove item");
    }
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b-2 border-gray-200">
          <th className="p-4">Sr. No.</th>
          <th className="p-4 text-left">Product</th>
          <th className="p-4">Quantity</th>
          <th className="p-4">Price</th>
          <th className="p-4">Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartData?.items?.map((item, idx) => {
          return (
            /* Removed flex - let the table handle alignment */
            <tr
              key={item._id || idx}
              className="border-b border-gray-100 text-center">
              <td className="p-4">{idx + 1}</td>
              <td className="p-4">
                <div className="flex items-center gap-4 text-left">
                  <div className="img-div relative w-[100px] h-[100px] flex-shrink-0">
                    <Image
                      src={item?.product?.productImage}
                      alt={item?.product?.productName}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="product-desc flex flex-col gap-1">
                    <p className="font-bold">{item?.product?.productName}</p>
                    <p className="text-sm text-gray-500">
                      {item?.product?.productDescription}
                    </p>
                    <p className="text-xs text-gray-500 uppercase">
                      {item?.product?.productCategory}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4">{item?.quantity}</td>
              <td className="p-4">${item?.product?.productPrice}</td>
              <td className="p-4 font-bold">
                <p>
                  ${(item?.quantity * item?.product?.productPrice).toFixed(2)}
                </p>
              </td>
              <td>
                <button
                  className="p-1 bg-gray-400 rounded-full text-black cursor-pointer"
                  onClick={() => handleRemove(item._id)}>
                  <X size={20} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
