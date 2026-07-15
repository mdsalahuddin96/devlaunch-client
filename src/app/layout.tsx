import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DevLaunch - Showcasing Innovation",
  description:
    "A Premium Platform for Engineers to Curate & Track Custom Builds",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
