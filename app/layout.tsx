import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Söderhavet",
  description: "Swedish Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto py-10">
        <header className="flex justify-between mb-10">
          <div>
            <Link href="/">Söderhavet</Link>
          </div>

          <nav className="flex gap-4">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
