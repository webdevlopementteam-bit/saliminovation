"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    imageMobile: "/banner/b2.png",
    imageDesktop: "/banner/b2.png",
    title: "Precision Laser Cutting",
    subtitle: "Innovative Industrial Solutions",
  },
  {
    imageMobile: "/banner/s3.jpg",
    imageDesktop: "/banner/s3.jpg",
    title: "Advanced Laser Technology",
    subtitle: "Built For Modern Industries",
  },
  {
    imageMobile: "/banner/s4.jpg",
    imageDesktop: "/banner/s4.jpg",
    title: "CNC Metal Fabrication",
    subtitle: "Quality • Precision • Performance",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <section className="relative overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={700}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-[420px] sm:h-[520px] md:h-[640px] lg:h-[680px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background Images */}
              <Image
                src={slide.imageMobile}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                quality={90}
                className="block object-cover sm:hidden z-0"
              />
              <Image
                src={slide.imageDesktop}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                quality={90}
                className="hidden object-cover sm:block z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10" />

              {/* Glow */}
              <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[110px] z-10" />
              <div className="absolute left-[25%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[90px] z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
                  <div className="w-full max-w-[580px] text-center sm:text-left">
                    {/* Badge */}
                    <span className="mb-3 inline-flex w-fit items-center rounded-full border border-orange-400/40 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-orange-300 shadow-[0_0_25px_rgba(255,122,0,0.12)] backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-xs md:text-sm">
                      Premium Laser Manufacturer
                    </span>

                    {/* Heading */}
                    <div className="min-h-[100px] sm:min-h-[140px] lg:min-h-[180px]">
                      <h1 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)] sm:text-3xl md:text-4xl lg:text-5xl">
                        {slide.title}
                        <br />
                        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-lg font-bold text-transparent drop-shadow-[0_0_20px_rgba(255,153,0,0.15)] sm:text-2xl md:text-3xl lg:text-4xl">
                          {slide.subtitle}
                        </span>
                      </h1>
                    </div>

                    {/* Description → hide on mobile & tablet */}
                    <div className="hidden lg:block min-h-[60px] sm:min-h-[80px]">
                      <p className="max-w-xl text-xs leading-5 text-gray-200 drop-shadow-md sm:text-sm sm:leading-6 md:text-base md:leading-7">
                        Delivering high-quality laser cutting, engraving, and
                        fabrication solutions with unmatched precision,
                        innovation, and reliability for modern industries.
                      </p>
                    </div>

                    {/* Buttons → side by side on mobile & tablet */}
                    <div className="mt-5 flex flex-row gap-3 sm:mt-7">
                      <Link
                        href="/products"
                        className="flex-1 rounded-lg bg-gradient-to-r from-[#FF7A00] via-[#FF9800] to-[#FFC107] px-5 py-2 text-center text-xs font-semibold text-white shadow-[0_8px_30px_rgba(255,122,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(255,122,0,0.45)] md:px-7 md:py-3 md:text-sm"
                      >
                        Explore Products
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 rounded-lg border border-orange-400/40 bg-white/[0.06] px-5 py-2 text-center text-xs font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/80 hover:bg-orange-500/15 hover:shadow-[0_10px_30px_rgba(255,122,0,0.18)] md:px-7 md:py-3 md:text-sm"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />
              <div className="absolute bottom-0 left-1/2 z-20 h-16 w-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
