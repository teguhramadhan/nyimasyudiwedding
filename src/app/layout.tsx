// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  Slabo_27px,
  Noto_Naskh_Arabic,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Wedding Nyimas & Yudi",
  description: "Deskripsi singkat",
};

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

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-naskh-arabic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${slabo.variable} ${notoNaskhArabic.variable}`}
    >
      <head />
      <body className="font-slabo">{children}</body>
    </html>
  );
}
