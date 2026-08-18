"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="border-b border-orange-500/20 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="hidden lg:flex items-center gap-4 group">
            <div className="relative overflow-hidden rounded-xl border border-orange-500/30 bg-[#111111] p-1 shadow-lg">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={70}
                height={70}
                priority
                className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto rounded-lg object-contain transition duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
                SALIM
              </h2>
              <p className="text-xs uppercase tracking-[4px] text-[#FFB300]">
                INNOVATIONS
              </p>
            </div>
          </Link>

          {/* Right side: Contact + Divider + Social */}
          <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:justify-end">
            {/* Contact icons */}
            <div className="flex w-full justify-between text-sm lg:w-auto lg:gap-3">
              {/* Email */}
              <Link
                href="mailto:saliminnovations@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161616] border border-orange-500/20">
                  <FaEnvelope className="text-[#FF7A00]" />
                </div>
                <span className="block lg:hidden">
                  saliminnovations@gmail.com
                </span>
              </Link>

              {/* Phone */}
              <Link
                href="tel:+919560568272"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161616] border border-orange-500/20">
                  <FaPhoneAlt className="text-[#FF7A00]" />
                </div>
                <span className="hidden md:block lg:hidden">
                  +91 9560568272
                </span>
              </Link>

              {/* Location */}
              <Link
                href="#"
                className="hidden lg:flex items-center text-gray-300 hover:text-white transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161616] border border-orange-500/20">
                  <FaMapMarkerAlt className="text-[#FF7A00]" />
                </div>
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-8 w-px bg-orange-500/20"></div>

            {/* Social icons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-[#161616] text-gray-300 hover:border-[#FF7A00] hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FFC107] hover:text-white"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-[#161616] text-gray-300 hover:border-[#FF7A00] hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FFC107] hover:text-white"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-[#161616] text-gray-300 hover:border-[#FF7A00] hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FFC107] hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
