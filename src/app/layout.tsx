import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenville's Transfer Station",
  description: "Dashboard for Managing Greenvilles Tranfser Station Customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-row items-center justifty-between h-28 w-full">
          <a href="/">
            <Image
              src="/town-of-greenville-logo-white.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={120}
              height={24}
              priority
            /></a>
            <a href="/application">New Application</a>
            <a href="/disposal">Disposal</a>
            </nav>
        {children}
        </body>
    </html>
  );
}
