"use server";

// Cookie
import { cookies } from "next/headers";

export const GetToken = async () => {
  const cookieStore = await cookies();

  const tokenData = cookieStore.get("token");
  return tokenData?.value;
};
