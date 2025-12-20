import { NextRequest, NextResponse } from "next/server";
import arcjet, { shield, fixedWindow } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["ip.src"],
  rules: [
    // Shield protects against common attacks
    shield({
      mode: "LIVE",
    }),
    // Global rate limiting
    fixedWindow({
      mode: "LIVE",
      window: "1m", // 1 minute window
      max: 100, // 100 requests per minute per IP for general browsing
    }),
  ],
});

export async function middleware(request: NextRequest) {
  // Apply Arcjet protection to all requests
  const decision = await aj.protect(request);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
        { error: "Too many requests. Please slow down." },
        { status: 429 }
      );
    }

    if (decision.reason.isBot()) {
      return NextResponse.json(
        { error: "Bot detected. Access denied." },
        { status: 403 }
      );
    }

    return NextResponse.json(
      { error: "Request blocked for security reasons." },
      { status: 403 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};