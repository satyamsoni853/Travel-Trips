import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunspots",
  description: "Travel UI/UX App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-white dark:bg-gray-900 overflow-hidden relative overflow-x-hidden">
        <ThemeProvider>
          <div className="circle-pink h-screen w-screen lg:top-[-40%] lg:left-[-15%] md:left-[-20%] sm:top-[-50%] sm:left-[-25%] xs:top-[-50%] xs:right-[40%]" />
          <div className="circle-yellow h-screen w-screen xl:top-[110%] left-[80%] sm:top-[180%]" />
          <Navbar />
          <main className="relative overflow-hidden pt-24 sm:pt-28 md:pt-18">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
