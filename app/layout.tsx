import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const inter = Play({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lussare",
  description: "Share your lunch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="prose">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
