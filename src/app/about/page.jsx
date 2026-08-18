"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaPhoneAlt,
  FaArrowRight,
  FaIndustry,
  FaAward,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  const values = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      color: "from-orange-500 to-yellow-400",
      glow: "bg-orange-500/10",
      desc: "To deliver precision-engineered MS and SS fabrication solutions using advanced technology, skilled craftsmanship and dependable production processes.",
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      color: "from-yellow-400 to-orange-500",
      glow: "bg-yellow-500/10",
      desc: "To establish SALIM INNOVATIONS as a trusted manufacturing partner known for engineering excellence, reliability, innovation and long-term customer relationships.",
    },
    {
      icon: <FaHandshake />,
      title: "Our Commitment",
      color: "from-orange-400 to-orange-600",
      glow: "bg-orange-500/10",
      desc: "We remain committed to consistent quality, transparent communication, professional execution and complete support throughout every project.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-16 max-w-4xl  text-start md:text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-orange-400 shadow-[0_0_25px_rgba(255,122,0,0.08)] sm:text-sm">
            About SALIM INNOVATIONS
          </span>

          <div className="mt-6">
            <span className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              MS & SS
            </span>

            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
              Manufacturing Experts
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            SALIM INNOVATIONS is a complete MS & SS manufacturing, fabrication
            and industrial job work solution provider. We undertake all types of
            customized manufacturing and fabrication work as per customer
            requirements, drawings and specifications. Our capabilities include
            Laser Cutting, Laser Welding, CNC Pipe & Tube Laser Cutting, CNC
            Bending, VMC Milling, Welding & Fabrication, PU Foaming and Assembly
            & Finishing.
          </p>
        </div>

        {/* =====================================================
            IMAGE + WHO WE ARE
        ====================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= IMAGE COLLAGE ================= */}

          <div className="relative order-2 lg:order-1">
            {/* Main glow */}

            <div className="absolute -inset-8 rounded-[50px] bg-orange-500/10 blur-[80px]" />

            <div className="relative grid grid-cols-2 gap-4">
              <div className="group relative mt-8 h-[230px] overflow-hidden rounded-[28px] border border-orange-500/20 bg-[#111] shadow-2xl sm:h-[280px]">
                <Image
                  src="/images/s2.png"
                  alt="SALIM INNOVATIONS Manufacturing"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Image 2 */}

              <div className="group relative h-[230px] overflow-hidden rounded-[28px] border border-yellow-500/20 bg-[#111] shadow-2xl sm:h-[280px]">
                <Image
                  src="/images/service-2.jpg"
                  alt="Industrial Fabrication"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 h-1 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Image 3 */}

              <div className="group relative h-[230px] overflow-hidden rounded-[28px] border border-yellow-500/20 bg-[#111] shadow-2xl sm:h-[280px]">
                <Image
                  src="/images/service-3.jpg"
                  alt="Laser Cutting Technology"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Image 4 */}

              <div className="group relative mt-8 h-[230px] overflow-hidden rounded-[28px] border border-orange-500/20 bg-[#111] shadow-2xl sm:h-[280px]">
                <Image
                  src="/images/service-5.jpg"
                  alt="MS and SS Manufacturing"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 h-1 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-20" />
              </div>
            </div>

            {/* Center decorative element */}

            <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-orange-400/40 bg-black/80 shadow-[0_0_35px_rgba(255,122,0,0.25)] backdrop-blur-xl">
              <FaIndustry className="text-2xl text-orange-400" />
            </div>
          </div>

          {/* ================= LEFT CONTENT ================= */}

          <div className="order-1 lg:order-2">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Who We Are
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              A Manufacturing Partner Focused on
              <span className="mt-1 block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Quality & Reliability
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:leading-8">
              Our capabilities include Laser Cutting, Laser Welding, CNC Pipe &
              Tube Laser Cutting, CNC Bending, VMC Milling, Welding &
              Fabrication, PU Foaming and Assembly & Finishing.
            </p>

            <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:leading-8">
              We work with Mild Steel (MS) and Stainless Steel (SS) and can
              manufacture almost any customized component, part, structure,
              enclosure or finished product as per the customer’s requirement.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base md:leading-8">
              From prototype and small quantity job work to bulk production and
              large industrial projects, we provide complete solutions under one
              roof..
            </p>

            {/* Small highlight */}

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-orange-500/15 bg-white/[0.03] p-4 backdrop-blur-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black">
                <FaAward />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Precision. Quality. Reliability.
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Complete manufacturing solutions under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div className="relative mt-20 lg:mt-28">
          <div className="absolute -inset-10 rounded-[50px] bg-orange-500/5 blur-[80px]" />

          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            {/* Experience */}

            <div className="group rounded-3xl border border-orange-500/20 bg-gradient-to-br from-[#171717] to-[#0c0c0c] p-5 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-orange-500/10 sm:p-7">
              <FaIndustry className="mx-auto mb-4 text-3xl text-orange-400 transition duration-500 group-hover:scale-110 sm:text-4xl" />

              <h4 className="text-3xl font-black text-white sm:text-4xl">
                15+
              </h4>

              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Years Experience
              </p>
            </div>

            {/* Quality */}

            <div className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#171717] to-[#0c0c0c] p-5 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-yellow-500/10 sm:p-7">
              <FaAward className="mx-auto mb-4 text-3xl text-yellow-400 transition duration-500 group-hover:scale-110 sm:text-4xl" />

              <h4 className="text-3xl font-black text-white sm:text-4xl">
                100%
              </h4>

              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Quality Focus
              </p>
            </div>

            {/* Projects */}

            <div className="group rounded-3xl border border-orange-500/20 bg-gradient-to-br from-[#171717] to-[#0c0c0c] p-5 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-orange-500/10 sm:p-7">
              <FaUsers className="mx-auto mb-4 text-3xl text-orange-400 transition duration-500 group-hover:scale-110 sm:text-4xl" />

              <h4 className="text-3xl font-black text-white sm:text-4xl">
                500+
              </h4>

              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Projects Delivered
              </p>
            </div>

            {/* Support */}

            <div className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#171717] to-[#0c0c0c] p-5 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-yellow-500/10 sm:p-7">
              <FaHandshake className="mx-auto mb-4 text-3xl text-yellow-400 transition duration-500 group-hover:scale-110 sm:text-4xl" />

              <h4 className="text-3xl font-black text-white sm:text-4xl">
                24/7
              </h4>

              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Customer Support
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            MISSION / VISION / COMMITMENT
        ====================================================== */}

        {/* =====================================================
    MISSION / VISION / COMMITMENT
====================================================== */}

        <div className="relative mt-20 lg:mt-28">
          {/* Background Glow */}

          <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

          <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[120px]" />

          <div className="relative grid gap-6 lg:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(255,122,0,0.10)] sm:p-8"
              >
                {/* ================= TOP GLOW ================= */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${item.glow} blur-[70px] opacity-50 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`}
                />

                {/* ================= DECORATIVE NUMBER ================= */}

                <span className=" pointer-events-none absolute right-5 top-3 text-7xl font-black text-white/[0.025] transition-all duration-500 group-hover:text-orange-500/[0.06]">
                  0{index + 1}
                </span>

                {/* ================= ICON ================= */}

                <div className="relative z-10">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-2xl text-white shadow-[0_10px_30px_rgba(255,122,0,0.20)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-[70px] sm:w-[70px] sm:text-3xl`}
                  >
                    {item.icon}
                  </div>

                  {/* ================= TITLE ================= */}

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.desc}
                  </p>

                  {/* ================= BOTTOM LINE ================= */}

                  <div className="mt-7 flex items-center gap-3">
                    <div
                      className={` h-[2px] w-10 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-20`}
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-600 transition-colors duration-300 group-hover:text-orange-400">
                      SALIM INNOVATIONS
                    </span>
                  </div>
                </div>

                {/* ================= BOTTOM GLOW ================= */}

                <div
                  className={`pointer-events-none absolute -bottom-20 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full ${item.glow} blur-[70px] opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="relative mt-20 overflow-hidden rounded-[32px] border border-orange-500/20 bg-gradient-to-r from-[#111111] via-[#181818] to-[#111111] p-7 shadow-2xl sm:p-10 lg:mt-24 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-yellow-500/10 blur-[90px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Have a Manufacturing Requirement?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                Share your project requirements with our team and discover a
                practical fabrication solution tailored to your application.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="tel:+919560568272"
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-3.5 font-bold text-black shadow-[0_8px_25px_rgba(255,122,0,0.2)] transition duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(255,122,0,0.35)]"
              >
                <FaPhoneAlt />
                Call Now
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 rounded-full border border-orange-500/70 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-orange-500 hover:text-black"
              >
                Get Quote
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
