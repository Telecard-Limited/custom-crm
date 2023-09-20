import { NextRequest, NextResponse } from "next/server";
import { POST } from "./app/api/register/route";
export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname === '/') {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
  //@ts-ignore
  if (!POST(request)) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}

export const config = {
  matcher: "/api/register:POST*",
};
