import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/sections/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Floating from "@/sections/Floating";
import ScrollToTopButton from "@/sections/ScrollTop";
import Breadcrumb from "@/components/Breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Topbar />
        <Navbar />
        <main className="flex-grow">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
        <Floating />
      </body>
    </html>
  );
}
