"use server";

// Cookie
import { cookies } from "next/headers";
// Redirect
import { redirect } from "next/navigation";

export async function RemoveToken() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("userdata");

  redirect("/login");
}
