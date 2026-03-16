import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  // If logged-in user tries to access /login → redirect to /
  if (accessToken && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // rewrite is used to rewrite the content of new url to old url
  // if (request.nextUrl.pathname.startsWith("/about")) {
  //   return NextResponse.rewrite(new URL("/contact", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup"],
};
