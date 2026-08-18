import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Floating() {
  return (
    <>
      {/* Call Button */}
      <div className="fixed bottom-5 left-5 z-50 group">
        <Link
          href="tel:+919560568272"
          className="relative flex h-14 w-14 items-center overflow-hidden rounded-full
          border border-yellow-500/30
          bg-[#141414]/95
          text-yellow-400
          shadow-[0_0_25px_rgba(255,193,7,0.25)]
          backdrop-blur-md
          transition-all duration-500
          hover:w-60
          hover:border-yellow-400
          hover:bg-yellow-500
          hover:text-black"
        >
          {/* Icon */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <FaPhoneAlt className="text-xl" />
          </div>

          {/* Text */}
          <span className="whitespace-nowrap pr-6 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
            Call Us: +91 9560568272
          </span>
        </Link>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-50 group">
        <Link
          href="https://wa.me/919560568272"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-12 md:h-14 w-12 md:w-14 items-center overflow-hidden rounded-full
          border border-green-500/30
          bg-[#141414]/95
          text-green-400
          shadow-[0_0_25px_rgba(34,197,94,0.25)]
          backdrop-blur-md
          transition-all duration-500
          hover:w-65
          hover:border-green-400
          hover:bg-green-500
          hover:text-white"
        >
          {/* Icon */}
          <div className="relative flex h-12 md:h-14 w-12 md:w-14  shrink-0 items-center justify-center">
            <FaWhatsapp className="text-2xl" />
          </div>

          {/* Text */}
          <span className="whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
            WhatsApp: +91 9560568272
          </span>
        </Link>
      </div>
    </>
  );
}
