// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Slabo_27px } from "next/font/google";

export const metadata: Metadata = {
  title: "Wedding Nyimas & Yudi",
  description: "Deskripsi singkat",
};

// Optional: kalau mau pakai font loader dari Next.js (lebih optimal)
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
});
const slabo = Slabo_27px({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-slabo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${slabo.variable}`}
    >
      <head />
      <body className="font-slabo">{children}</body>
    </html>
  );
}
