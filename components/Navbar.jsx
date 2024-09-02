// Navbar.js
"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/authContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="w-full h-[60px] bg-[#0A0C2B] flex justify-center md:justify-end items-center gap-10 text-white md:pr-24">
      {isLoggedIn ? (
        <>
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/form">
            <div>Form</div>
          </Link>
          <Link href="/admin">
            <div>Admin</div>
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-[#C60066] hover:bg-[#d71066] px-5 py-1 rounded-[8px]"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/register">
            <div>Sign Up</div>
          </Link>
          <Link href="/login">
            <div className="bg-[#C60066] hover:bg-[#d71066] px-5 py-1 rounded-[8px]">
              Sign In
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
