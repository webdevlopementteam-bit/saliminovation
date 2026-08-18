"use client";

import Link from "next/link";
import { FaExclamationTriangle, FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[180px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-3xl text-center">
        {/* Icon */}

        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-orange-500/30 bg-[#111111] shadow-[0_0_40px_rgba(255,122,0,.25)]">
          <FaExclamationTriangle className="text-5xl text-[#FFB300]" />
        </div>

        {/* 404 */}

        <h1 className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] bg-clip-text text-8xl font-extrabold text-transparent md:text-[170px] leading-none">
          404
        </h1>

        {/* Heading */}

        <h2 className="mt-6 text-4xl font-bold uppercase text-white md:text-5xl">
          Page Not Found
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400">
          Sorry! The page you're looking for doesn't exist, has been removed, or
          is temporarily unavailable. Let's get you back to the homepage.
        </p>

        {/* Button */}

        <Link
          href="/"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_35px_rgba(255,122,0,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_45px_rgba(255,122,0,.55)]"
        >
          Back To Home
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Bottom Text */}

        <div className="mt-12 border-t border-orange-500/20 pt-6">
          <p className="text-sm uppercase tracking-[4px] text-[#FFB300]">
            Precision • Innovation • Excellence
          </p>
        </div>
      </div>
    </section>
  );
}
