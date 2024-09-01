import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // Import the jwtVerify function from jose

const SECRET_KEY = new TextEncoder().encode(process.env.SECRET_KEY);

export async function middleware(request) {
  const token = request.cookies.get("access_token")?.value;

  if (!token) {
    console.log("No token found, redirecting to login.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token using jose
    const { payload } = await jwtVerify(token, SECRET_KEY);

    // Check if the token contains the expected claims
    if (!payload.user_id) {
      console.log("Token does not contain user_id, redirecting to login.");
      throw new Error("Invalid token");
    }

    // Continue with the request if the token is valid
    return NextResponse.next();
  } catch (err) {
    console.log("JWT verification error:", err);
    // Redirect to login if the token is invalid or expired
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/admin/:path*", // This applies the middleware to the /admin route and all its subroutes
};
