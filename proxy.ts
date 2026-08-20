import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "mokshasewa.org";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  if (host && host !== CANONICAL_HOST && host.replace(/^www\./, "") === CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
