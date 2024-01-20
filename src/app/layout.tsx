import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIC JKLU",
  description: "Driving Innovation for a Better Future · AIC-JKLU's · For Sector Agnostic Startups · AIC-JKLU in collaboration with JK Paper presents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aic-logo.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
