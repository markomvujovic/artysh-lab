import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "ArtyshLab — Moji prvi koncerti",
  description:
    "Interaktivni i edukativni koncerti za bebe, decu i njihove roditelje.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr" className={`${comfortaa.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
