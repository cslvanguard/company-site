import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CSL Vanguard — Pioneering Web Solutions",
  description:
    "We build, fix, and scale exceptional web experiences. Custom development, security, marketing, and hosting for businesses ready to lead.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-body antialiased bg-surface-50 text-midnight-900 overflow-x-hidden">
        <div className="noise-overlay" />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}