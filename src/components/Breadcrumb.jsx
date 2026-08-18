"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Hide breadcrumb on home page
  if (!pathname || pathname === "/") {
    return null;
  }

  const pathArray = pathname.split("/").filter(Boolean);

  const format = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section className="relative w-full overflow-hidden min-h-[250px] sm:min-h-[260px] lg:min-h-[300px] flex items-center">
      {/* ================= BACKGROUND IMAGE ================= */}
      <Image
        src="/breadcrumb/b0.png"
        alt="Breadcrumb background"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-orange-950/40" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* ================= HOME ================= */}
            <Link
              href="/"
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
            >
              <Home size={16} className="relative z-10 text-orange-400 " />
              <span className="relative z-10 text-orange-400 hover:border-b-2 hover:border-orange-400 transition">
                Home
              </span>
            </Link>

            {/* ================= PATH SEGMENTS ================= */}
            {pathArray.map((segment, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;

              return (
                <div
                  key={href}
                  className="flex min-w-0 items-center gap-2 sm:gap-3"
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={2.5}
                    className="shrink-0 text-orange-400 drop-shadow-[0_0_8px_rgba(255,136,0,0.5)]"
                  />

                  {isLast ? (
                    <div
                      aria-current="page"
                      className="relative min-w-0 rounded-xl sm:rounded-2xl"
                    >
                      <div className="flex items-center rounded-[11px]  px-3 py-2 text-xs font-bold text-white  sm:rounded-[15px] sm:px-5 sm:py-3 sm:text-sm">
                        <span
                          className="max-w-[160px] truncate sm:max-w-[280px]"
                          title={format(segment)}
                        >
                          {format(segment)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className="max-w-[150px] truncate rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-xs font-medium text-gray-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:bg-black/80 hover:text-orange-300 hover:shadow-[0_0_20px_rgba(255,136,0,0.2)] sm:max-w-[220px] sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
                      title={format(segment)}
                    >
                      {format(segment)}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </section>
  );
}
