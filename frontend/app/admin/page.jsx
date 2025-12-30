"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Helpers
import LogoutButton from "../_components/LogoutButton/LogoutButton";
import { adminProtected } from "../httpServices/httpServices";
import { getCurrentUser, getToken } from "../auth-actions/auth-actions";

export default function AdminPage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const token = await getToken();
      const userdata = await getCurrentUser();

      if (!token || !userdata) {
        router.push("/login");
        return;
      }

      setUserInfo(userdata);

      try {
        const res = await axios.get(adminProtected(), {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
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
