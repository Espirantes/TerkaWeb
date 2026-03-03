import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Domov důchodců Řepy | Domov, kde se cítíte jako doma",
  description:
    "Domov důchodců v pražských Řepích nabízí kvalitní péči, ubytování a bohatý program pro seniory v klidném prostředí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
