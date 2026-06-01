import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Check if it's the kokoro subdomain (e.g., kokoro.metamate.social or kokoro.localhost:3000)
  const isKokoroSubdomain = hostname.startsWith("kokoro.");

  if (isKokoroSubdomain) {
    // Prevent duplicate paths: Redirect subdomain/kokoromate to subdomain/
    if (url.pathname === "/kokoromate") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    // Rewrite subdomain root / to /kokoromate internally
    if (url.pathname === "/") {
      url.pathname = "/kokoromate";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. api (API routes)
     * 2. _next/static (static files)
     * 3. _next/image (image optimization files)
     * 4. favicon.ico, images, logos, etc (static files under public)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)",
  ],
};
