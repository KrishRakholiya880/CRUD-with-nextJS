"use server";

import { cookies } from "next/headers";

// ==========================================
// 1. SPECIFIC ACTION: TOKEN ONLY
// ==========================================
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

// ==========================================
// 2. SPECIFIC ACTION: USER DATA ONLY
// ==========================================
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

// ==========================================
// 3. SAFE COMBINED ACTION (Use this for Login/Signup)
// ==========================================
export async function createSession(token, userData) {
  const cookieStore = await cookies(); // Get the store for THIS specific request

  // Set Token
  if (token) {
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/", // Added path to ensure consistency
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  // Set User
  if (userData) {
    const value =
      typeof userData === "object" ? JSON.stringify(userData) : userData;

    cookieStore.set("currentUser", value, {
      httpOnly: true,
      secure: true,
      path: "/", // Added path to ensure consistency
      maxAge: 60 * 60 * 24 * 7,
    });
  }
}

// ==========================================
// 5. GET TOKEN (Server Side Only)
// ==========================================
export async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return token?.value;
}

// ==========================================
// 6. GET CURRENT USER (Server Side Only)
// ==========================================
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("currentUser");

  if (!userCookie?.value) return null;

  try {
    return JSON.parse(userCookie.value);
  } catch (error) {
    console.error("Failed to parse currentUser cookie:", error);
    return null;
  }
}

// ==========================================
// 7. LOGOUT (Clears Everything)
// ==========================================
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("currentUser");
}
