import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full h-[60px] bg-[#0A0C2B] flex justify-center md:justify-end items-center gap-10 text-white md:pr-24">
      <Link href="/register">
        <div>Sign Up</div>
      </Link>
      <Link href='/login'>
        <div className="bg-[#C60066] hover:bg-[#d71066] px-5 py-1 rounded-[8px]">Sign In</div>
      </Link>
    </div>
  );
}
