"use client";

import { useEffect, useRef, useState } from "react";
// lucide-react Icons
import { User, X } from "lucide-react";
// Components
import LogoutButton from "../LogoutButton/LogoutButton";
// Link
import Link from "next/link";

const Profile = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);

  // Ref
  const menuRef = useRef(null);

  // Effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the entire container
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <User
        size={40}
        strokeWidth={2}
        className="p-2.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all active:scale-90 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute top-[130%] right-0 w-64 bg-zinc-950 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800 overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900/50">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Account
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors p-1 hover:bg-zinc-800 rounded-full">
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-2 flex flex-col gap-1">
            <Link
              href="/user"
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400 rounded-xl transition-all group"
              onClick={() => setIsOpen(false)}>
              <span className="bg-zinc-800 group-hover:bg-yellow-400/10 p-2 rounded-lg transition-colors text-lg">
                👤
              </span>
              View Profile
            </Link>

            <Link
              href="/orders"
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400 rounded-xl transition-all group"
              onClick={() => setIsOpen(false)}>
              <span className="bg-zinc-800 group-hover:bg-yellow-400/10 p-2 rounded-lg transition-colors text-lg">
                📦
              </span>
              My Orders
            </Link>

            {/* Divider */}
            <div className="my-2 border-t border-zinc-800 mx-2"></div>

            <div className="px-1 pb-1">
              <LogoutButton
                className="w-full flex items-center gap-3 px-3 py-3 text-sm font-bold text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
