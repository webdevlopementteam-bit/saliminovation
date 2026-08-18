"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  FaCar,
  FaBolt,
  FaBuilding,
  FaCouch,
  FaTools,
  FaEllipsisH,
  FaCut,
  FaLayerGroup,
  FaRulerCombined,
  FaWrench,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCar />,
    title: "Automotive",
    description:
      "Precision-engineered components and fabricated parts designed for modern automotive applications.",
    image: "/services/auto_mobile.jpg",
  },
  {
    icon: <FaBolt />,
    title: "Electrical & Electronics",
    description:
      "Reliable manufacturing solutions for electrical panels, enclosures, assemblies and components.",
    image: "/services/panel1.jpg",
  },
  {
    icon: <FaBuilding />,
    title: "Construction",
    description:
      "Strong and accurate structural fabrication solutions for demanding construction projects.",
    image: "/services/construction.jpg",
  },
  {
    icon: <FaCouch />,
    title: "Furniture",
    description:
      "Modern and durable metal furniture components manufactured with precision and premium finishing.",
    image: "/services/furniture1.jpg",
  },
  {
    icon: <FaTools />,
    title: "Engineering",
    description:
      "Comprehensive engineering and fabrication services supported by modern manufacturing technology.",
    image: "/services/Engineering.jpg",
  },
  {
    icon: <FaEllipsisH />,
    title: "Many More",
    description:
      "Flexible manufacturing and fabrication solutions for a wide range of industrial applications.",
    image: "/services/more.jpg",
  },
];

const expertise = [
  {
    icon: <FaCut />,
    title: "Laser Cutting",
    description: "High precision cutting for MS & SS.",
  },
  {
    icon: <FaLayerGroup />,
    title: "CNC Pipe Cutting",
    description: "Accurate CNC pipe & tube cutting.",
  },
  {
    icon: <FaRulerCombined />,
    title: "CNC Bending",
    description: "Complex bending & forming solutions.",
  },
  {
    icon: <FaWrench />,
    title: "Fabrication",
    description: "Durable fabrication with modern machinery.",
  },
  {
    icon: <FaCogs />,
    title: "Assembly",
    description: "Complete assembly and finishing.",
  },
  {
    icon: <FaTools />,
    title: "Custom Manufacturing",
    description: "Tailor-made industrial solutions.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 md:py-24">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute -left-40 top-[40%] h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[130px]" />

        <div className="absolute bottom-0 right-[20%] h-[300px] w-[300px] rounded-full bg-orange-600/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.03),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(255,122,0,0.8)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[4px] text-orange-400 sm:text-xs">
              Our Services
            </span>

            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(255,193,7,0.8)]" />
          </div>

          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Industrial Solutions
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Built With Precision
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
            Delivering world-class fabrication, laser cutting and engineering
            solutions with unmatched quality, accuracy and modern manufacturing
            technology.
          </p>

          <div className="mx-auto mt-7 h-[2px] w-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400" />
        </div>

        {/* =====================================================
            INDUSTRIES
        ===================================================== */}

        <div className="mb-12">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                Industries
              </span>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Industries We Serve
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Precision manufacturing solutions engineered to meet the
              requirements of diverse industries.
            </p>
          </div>

          {/* =====================================================
              IMAGE CARDS
          ===================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative h-[390px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* IMAGE */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* TOP NUMBER */}

                <div className="absolute right-5 top-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                    <span className="text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* ICON */}

                <div className="absolute left-6 top-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-xl text-orange-400 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-orange-400/50 group-hover:bg-orange-500/20">
                    {item.icon}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  {/* small line */}

                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-20" />

                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
                    {item.description}
                  </p>

                  {/* EXPLORE */}

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-orange-400">
                    <span>Explore Solutions</span>

                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="my-20 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          <div className="h-2 w-2 rotate-45 bg-orange-500 shadow-[0_0_15px_rgba(255,122,0,0.8)]" />

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        </div>

        {/* =====================================================
            MANUFACTURING EXPERTISE HEADER
        ===================================================== */}

        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
            What We Do
          </span>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Manufacturing{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Advanced machinery, skilled expertise and precision-driven processes
            for high-quality industrial manufacturing.
          </p>
        </div>

        {/* =====================================================
            EXPERTISE SWIPER
        ===================================================== */}

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={800}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            480: {
              slidesPerView: 1.4,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {expertise.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative min-h-[270px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0e0e0e] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                {/* background glow */}

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition-all duration-500 group-hover:bg-orange-500/20" />

                {/* number */}

                <span className="absolute right-5 top-5 text-5xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-orange-500/[0.08]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* icon */}

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-xl text-white shadow-[0_8px_25px_rgba(245,158,11,0.2)] transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="relative text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* bottom line */}

                <div className="absolute bottom-6 left-6 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="mt-16 rounded-[30px] border border-orange-500/10 bg-gradient-to-r from-orange-500/[0.06] via-transparent to-yellow-500/[0.04] px-6 py-8 text-center sm:px-10">
          <p className="text-sm text-gray-400 sm:text-base">
            Need a custom manufacturing solution?
          </p>

          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Let&apos;s build something precise.
          </h3>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-400">
            <span>Custom Manufacturing</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}
