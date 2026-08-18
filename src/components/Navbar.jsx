"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path) =>
    `relative transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:transition-all after:duration-300 ${
      pathname === path
        ? "text-[#FFC107] after:w-full after:bg-gradient-to-r after:from-[#FF7A00] after:to-[#FFC107]"
        : "text-gray-300 hover:text-[#FFC107] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-[#FF7A00] after:to-[#FFC107]"
    }`;

  const mobileLink = (path) =>
    `block py-3 transition ${
      pathname === path
        ? "text-[#FFC107] font-semibold"
        : "text-gray-300 hover:text-[#FFC107]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-[#090909]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5">
        <nav className="flex h-20 items-center justify-between">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className={navLink("/")}>
              Home
            </Link>
            <Link href="/about" className={navLink("/about")}>
              About
            </Link>
            <Link href="/products" className={navLink("/products")}>
              Products
            </Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button
                className={`${
                  pathname.startsWith("/testimonial") ||
                  pathname.startsWith("/appointment") ||
                  pathname.startsWith("/services")
                    ? "text-[#FFC107] after:w-full"
                    : "text-gray-300 hover:text-[#FFC107] after:w-0 hover:after:w-full"
                } relative flex items-center gap-1 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-gradient-to-r after:from-[#FF7A00] after:to-[#FFC107] after:transition-all`}
              >
                Explore
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full mt-5 w-64 rounded-2xl border border-orange-500/20 bg-[#111111]/95 backdrop-blur-xl opacity-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100 shadow-2xl overflow-hidden">
                {[
                  ["Testimonial", "/testimonial"],
                  ["Appointment", "/contact"],
                  ["Services", "/services"],
                ].map(([name, link]) => (
                  <Link
                    key={name}
                    href={link}
                    className={`block px-6 py-4 border-b border-orange-500/10 transition ${
                      pathname === link
                        ? "bg-orange-500/20 text-[#FFC107]"
                        : "text-gray-300 hover:bg-orange-500/10 hover:text-[#FFC107]"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className={navLink("/contact")}>
              Contact
            </Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFC107] px-7 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-orange-500/50"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile Section */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-xl border border-orange-500/30 bg-[#111111] p-1 shadow-lg">
                <Image
                  src="/logo/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  priority
                  className="w-12 h-auto rounded-lg object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-wide text-white">
                  SALIM
                </h2>
                <p className="text-[10px] uppercase tracking-[3px] text-[#FFB300]">
                  INNOVATIONS
                </p>
              </div>
            </Link>

            {/* Right - Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/20 bg-[#161616] text-white transition hover:bg-[#FF7A00]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-orange-500/20 bg-[#111111] lg:hidden">
          <div className="space-y-2 px-6 py-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={mobileLink("/")}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={mobileLink("/about")}
            >
              About
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className={mobileLink("/products")}
            >
              Products
            </Link>

            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex w-full items-center justify-between py-3 text-gray-300"
            >
              <span
                className={
                  pathname.startsWith("/testimonial") ||
                  pathname.startsWith("/appointment") ||
                  pathname.startsWith("/services")
                    ? "text-[#FFC107] font-semibold"
                    : ""
                }
              >
                Explore
              </span>
              <ChevronDown
                size={18}
                className={`transition ${pagesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {pagesOpen && (
              <div className="ml-4 border-l border-orange-500/20 pl-4">
                {[
                  ["Testimonial", "/testimonial"],
                  ["Appointment", "/contact"],
                  ["Services", "/services"],
                ].map(([name, link]) => (
                  <Link
                    key={name}
                    href={link}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 transition ${
                      pathname === link
                        ? "text-[#FFC107] font-semibold"
                        : "text-gray-400 hover:text-[#FFC107]"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={mobileLink("/contact")}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 block rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFC107] py-3 text-center font-semibold text-white"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
