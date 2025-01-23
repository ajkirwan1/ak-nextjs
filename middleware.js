/** @format */

// middleware.js
import { NextResponse } from "next/server";
export function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  if (request.cookies.has("visited") && pathname == "/") {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  if (!request.cookies.has("visited") && pathname == "/") {
    const response = NextResponse.next();
    response.cookies.set("visited", "visited");
    return response;
  }
}
