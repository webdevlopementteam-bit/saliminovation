"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-5 md:bottom-24 md:right-6 z-50
      flex h-8 w-8 md:h-10 md:w-10 items-center justify-center
      rounded-full
      bg-gradient-to-br from-yellow-100 via-yellow-500 to-amber-600
      border-2 border-yellow-200
      text-base font-bold text-black
      shadow-[0_8px_20px_rgba(234,179,8,0.45)]
      transition-all duration-300 ease-in-out
      hover:scale-110 hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(234,179,8,0.7)]
      active:scale-95
      ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      aria-label="Scroll to Top"
    >
      ↑
    </button>
  );
}
