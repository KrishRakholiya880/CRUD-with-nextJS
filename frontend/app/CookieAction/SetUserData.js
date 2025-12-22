"use server";

// Cookie
import { cookies } from "next/headers";

export const SetUserData = async (userdata) => {
  const cookieStore = await cookies();
  const stringData = JSON.stringify(userdata);
  cookieStore.set("userdata", stringData);
};
