"use client"; // 👈 This makes it run in the browser

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ToastTrigger({ type, message }) {
  useEffect(() => {
    if (message) {
      if (type === "success") toast.success(message);
      if (type === "error") toast.error(message);
    }
  }, [type, message]);

  return null; // Invisible component
}
