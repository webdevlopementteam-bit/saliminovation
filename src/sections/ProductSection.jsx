"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Product = [
  {
    title: "MS & SS ENCLOSURES",
    image: "/products/ms_ss.png",
    description:
      "Premium quality Mild Steel and Stainless Steel enclosures designed for electrical, industrial, and commercial applications.",
  },
  {
    title: "CABLE TRAYS & SUPPORTS",
    image: "/products/cable_trays.png",
    description:
      "Robust cable trays and support systems for safe, organized, and efficient cable management.",
  },
  {
    title: "CUSTOM FABRICATED COMPONENTS",
    image: "/products/custom.png",
    description:
      "Precision-engineered fabricated components manufactured according to customer requirements.",
  },
  {
    title: "CUSTOM SHEET METAL PARTS",
    image: "/products/custom_sheet_part.png",
    description:
      "High-quality custom sheet metal parts produced with accurate cutting, bending and finishing.",
  },
  {
    title: "ELECTRICAL PANELS",
    image: "/products/electrical_pannels.png",
    description:
      "Reliable electrical panels and control cabinets manufactured for industrial automation.",
  },
  {
    title: "LASER CUTTING",
    image: "/products/laser_cut.png",
    description:
      "Precision laser cutting services with clean edges, tight tolerances and excellent finish.",
  },
  {
    title: "MS & SS FRAMES",
    image: "/products/ms_ss_frams.png",
    description:
      "Strong and durable MS & SS frames fabricated for machinery and structural applications.",
  },
  {
    title: "SHELVES & RACKS",
    image: "/products/rack.png",
    description:
      "Heavy-duty shelves and storage racks designed for industrial storage solutions.",
  },
];

export default function ProductSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden bg-black py-5 sm:py-12 lg:py-16">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[3px] text-orange-400 sm:px-5 sm:text-sm sm:tracking-[4px]">
            Our Products
          </span>

          <div className="mt-5">
            <span className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Complete
            </span>

            <span className="block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
              Manufacturing Solutions
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400 sm:mt-5 sm:text-lg sm:leading-8">
            Delivering precision fabrication, laser cutting and engineering
            solutions with advanced technology and quality standards.
          </p>
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="relative hidden lg:block">
          {/* Previous */}
          <button
            className="service-prev absolute -left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg transition hover:scale-110"
            aria-label="Previous products"
          >
            <FaChevronLeft />
          </button>

          {/* Next */}
          <button
            className="service-next absolute -right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg transition hover:scale-110"
            aria-label="Next products"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={22}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            slidesPerView={4}
          >
            {Product.map((p, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= MOBILE / TABLET GRID ================= */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:hidden">
          {Product.slice(0, 4).map((p, index) => (
            <ProductCard
              key={index}
              product={p}
              mobile
            />
          ))}
        </div>

        {/* ================= VIEW MORE ================= */}
        <div className="mt-8 flex justify-center sm:mt-10 lg:hidden">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-orange-500/20 transition duration-300 hover:scale-105 hover:shadow-orange-500/40 sm:px-8 sm:py-3.5 sm:text-base"
          >
            View More Products

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:translate-x-1">
              <FaArrowRight className="text-xs" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({ product, mobile = false }) {
  return (
    <div
      className={`group h-full overflow-hidden rounded-2xl border border-orange-500/20 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_15px_40px_rgba(255,122,0,.25)] ${
        mobile ? "rounded-xl" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative w-full overflow-hidden rounded-t-2xl border-b border-orange-500/20 bg-black/40 backdrop-blur-md ${
          mobile
            ? "h-36 sm:h-52"
            : "h-64 sm:h-80 md:h-96"
        }`}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          quality={100}
          sizes={
            mobile
              ? "(max-width:640px) 50vw, 50vw"
              : "(max-width:1280px) 25vw, 300px"
          }
          className="object-contain p-3 transition duration-700 group-hover:scale-105 group-hover:brightness-125 sm:p-5"
        />
      </div>

      {/* Content */}
      <div className={`${mobile ? "p-3 sm:p-4" : "p-4"}`}>
        <h3
          className={`mb-2 overflow-hidden font-bold text-white transition line-clamp-2 group-hover:text-yellow-400 ${
            mobile
              ? "min-h-[42px] text-sm sm:min-h-[48px] sm:text-base"
              : "h-16 text-lg"
          }`}
        >
          {product.title}
        </h3>

        <p
          className={`mb-4 overflow-hidden text-gray-400 line-clamp-2 ${
            mobile
              ? "text-xs leading-5 sm:text-sm sm:leading-6"
              : "text-sm leading-6"
          }`}
        >
          {product.description}
        </p>

        <Link
          href="/contact"
          className={`inline-flex items-center font-semibold text-orange-400 transition hover:text-white ${
            mobile
              ? "gap-2 text-xs sm:text-sm"
              : "gap-3"
          }`}
        >
          Enquire Now

          <span
            className={`flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white transition group-hover:translate-x-1 ${
              mobile
                ? "h-7 w-7 text-xs sm:h-8 sm:w-8"
                : "h-9 w-9"
            }`}
          >
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}