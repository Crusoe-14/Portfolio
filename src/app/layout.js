import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Godwin Okwong",
  description: "Portfolio of Godwin Okwong",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={`${spaceMono.variable}`}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
