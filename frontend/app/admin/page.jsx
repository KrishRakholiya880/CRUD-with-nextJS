"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// Helpers
import { GetToken } from "../CookieAction/GetToken";
import { GetUserData } from "../CookieAction/GetUserData";
import LogoutButton from "../_components/LogoutButton/LogoutButton";
import { adminProtected } from "../httpServices/httpServices";

export default function AdminPage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const token = await GetToken();
      const userdata = await GetUserData();

      if (!token || !userdata) {
        toast.error("Access Denied: Admins only");
        router.push("/login");
        return;
      }

      setUserInfo(userdata);

      try {
        const res = await axios.get(adminProtected(), {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [router]);

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-20">
      <h2 className="text-3xl">Admin Dashboard</h2>
      <p>
        Welcome <strong>{userInfo?.username || "Admin"}</strong> (
        {userInfo?.role || "Administrator"})
      </p>
      <LogoutButton />
    </div>
  );
}
