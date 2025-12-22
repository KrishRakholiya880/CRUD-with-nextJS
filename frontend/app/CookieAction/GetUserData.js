"use server";

// Cookie
import { cookies } from "next/headers";

export async function GetUserData() {
  const cookieStore = await cookies();
  const userInfo = cookieStore.get("userdata")?.value;

  if (!userInfo) return null;

  try {
    // Decode (remove %20) and Parse (String -> Object)
    return JSON.parse(decodeURIComponent(userInfo));
  } catch (e) {
    return null;
  }
}
