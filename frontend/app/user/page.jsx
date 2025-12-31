"use client";

import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Router
import { useRouter } from "next/navigation";
// Component
import LogoutButton from "../_components/LogoutButton/LogoutButton";
// API
import { userProtected } from "../httpServices/httpServices";
// Auth-actions
import { getCurrentUser, getToken } from "../auth-actions/auth-actions";

export default function UserPage() {
  // router
  const router = useRouter();
  // states
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // effcet
  useEffect(() => {
    const fetch = async () => {
      const token = await getToken();
      const userdata = await getCurrentUser();

      if (!token || !userdata) {
        router.replace("/login");
        return;
      }

      setUserInfo(userdata);

      try {
        const res = await axios.get(userProtected(), {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        router.replace("/login");
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
      <h2 className="text-3xl">User Dashboard</h2>
      <p>
        Welcome <strong>{userInfo?.username}</strong> ({userInfo?.role})
      </p>
      <LogoutButton />
    </div>
  );
}
