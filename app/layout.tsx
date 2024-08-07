import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaultflow",
  description: "Generated by create next app",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />{children}<Footer />
      </body>
    </html>
  );
}
