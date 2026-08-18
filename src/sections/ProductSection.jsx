"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    <section className="relative overflow-hidden bg-black py-5">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-orange-400">
            Our Products
          </span>

          <div className="mt-6">
            <span className=" text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Complete
            </span>
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Manufacturing Solutions
            </span>
          </div>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Delivering precision fabrication, laser cutting and engineering
            solutions with advanced technology and quality standards.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Previous Button */}
          <button className="service-prev absolute -left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg transition hover:scale-110 lg:flex">
            <FaChevronLeft />
          </button>

          {/* Next Button */}
          <button className="service-next absolute -right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg transition hover:scale-110 lg:flex">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={25}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {Product.map((p, index) => (
              <SwiperSlide key={index}>
                <div className="group overflow-hidden rounded-2xl border border-orange-500/20 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_15px_40px_rgba(255,122,0,.25)]">
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-orange-500/30 bg-black/40 backdrop-blur-md sm:h-80 md:h-96">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      quality={100}
                      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                      className="object-contain p-5  transition duration-700 group-hover:scale-105 group-hover:brightness-125"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="mb-2 h-16 overflow-hidden text-lg font-bold text-white transition line-clamp-2 group-hover:text-yellow-400">
                      {p.title}
                    </h3>

                    <p className="mb-4 overflow-hidden text-sm leading-6 text-gray-400 line-clamp-2">
                      {p.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 font-semibold text-orange-400 transition hover:text-white"
                    >
                      Enquire Now
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white transition group-hover:translate-x-1">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
