"use server";

// Cookie
import { cookies } from "next/headers";

export const SetToken = async (token) => {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
};
