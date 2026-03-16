"use server";

// Cookie
import { cookies } from "next/headers";

// 1. SETTOKEN ACTION: TOKEN ONLY
export async function setToken(token) {
  if (!token) return;

  // Call cookies() inside the function
  await cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function deleteToken() {
  await cookies().delete("token");
}

// 2. SETUSERDATA ACTION: USER DATA ONLY
export async function setCurrentUser(userData) {
  if (!userData) return;

  const value =
    typeof userData === "object" ? JSON.stringify(userData) : userData;

  await cookies().set("currentUser", value, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function deleteCurrentUser() {
  await cookies().delete("currentUser");
}

// 3. SAFE COMBINED ACTION (Use this for Login/Signup)
export async function createSession(accessToken, refreshToken, userData) {
  const cookieStore = await cookies();

  // Fix: Check for accessToken, not 'token'
  if (accessToken && refreshToken) {
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production", // Secure only in production
      path: "/",
    });
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
      path: "/",
    });
  }

  if (userData) {
    const value =
      typeof userData === "object" ? JSON.stringify(userData) : userData;
    cookieStore.set("userData", value, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
      path: "/",
    });
  }
}

// 5. GET TOKEN
export async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");
  return token?.value;
}

// 6. GET CURRENT USER
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("userData");

  if (!userCookie?.value) return null;

  try {
    return JSON.parse(userCookie.value);
  } catch (error) {
    console.error("Failed to parse currentUser cookie:", error);
    return null;
  }
}

// 7. LOGOUT
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("user");
}
