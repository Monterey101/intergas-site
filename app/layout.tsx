import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/app/components/navbar";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Custom",
  description: "Everything myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
