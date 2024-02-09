import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
    <html lang="en">
      <body className={clsx(inter.className, "prose dark:prose-invert ")}>
        {children}
      </body>
    </html>
  );
}
