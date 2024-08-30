'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import  {AuthProvider} from '../authContext'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
