"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaHandsHelping,
  FaRegLightbulb,
  FaCogs,
  FaCheckCircle,
  FaArrowRight,
  FaCog,
  FaUsers,
  FaBullseye,
  FaClock,
  FaSmile,
} from "react-icons/fa";

const capabilities = [
  {
    id: 1,
    icon: <FaCheckCircle />,
    number: "01",
    title: "High Quality Raw Materials",
    description:
      "We use premium MS & SS raw materials to ensure durability, strength and superior product performance.",
  },
  {
    id: 2,
    icon: <FaCog />,
    number: "02",
    title: "Advanced Machinery & Technology",
    description:
      "Modern CNC machines and laser technology deliver precision, efficiency and cutting-edge manufacturing.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    number: "03",
    title: "Skilled & Experienced Team",
    description:
      "Our trained professionals bring expertise and craftsmanship to every project for reliable outcomes.",
  },
  {
    id: 4,
    icon: <FaBullseye />,
    number: "04",
    title: "Precision & Accuracy in Every Product",
    description:
      "We focus on dimensional accuracy, perfect finishing and consistent quality across all components.",
  },
  {
    id: 5,
    icon: <FaClock />,
    number: "05",
    title: "Timely Delivery",
    description:
      "Organized production planning and efficient processes ensure projects are delivered on schedule.",
  },
  {
    id: 6,
    icon: <FaSmile />,
    number: "06",
    title: "Customer Satisfaction is Our Priority",
    description:
      "We prioritize client needs, delivering solutions that meet expectations and build long-term trust.",
  },
];

const processPoints = [
  "Laser Cutting ",
  " Laser Welding",
  "CNC Pipe Cutting ",
  "CNC Bending",
  "VMC Milling ",
  "Fabrication",
  " PU Foaming",
];

export default function Features() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-orange-400 sm:text-sm">
            Why Choose SALIM Innovations
          </span>

          <div className="mt-4">
            <span className=" text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Manufacturing
            </span>
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Without Compromise
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            From precision laser cutting to customized fabrication, our
            manufacturing capabilities are designed to handle demanding
            industrial requirements with accuracy, consistency and efficiency.
          </p>
        </div>

        {/* ================= CAPABILITY INTRO ================= */}

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT IMAGE */}

          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-[40px] bg-orange-500/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-orange-500/20 bg-[#101010]">
              <Image
                src="/images/welding1.jpg"
                alt="SALIM INNOVATIONS industrial manufacturing"
                width={800}
                height={700}
                className="h-[380px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Image Label */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/65 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-black">
                    <FaCogs />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-gray-400">
                      Manufacturing
                    </p>

                    <p className="mt-1 font-bold text-white">
                      Precision Driven
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 lg:order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Our Capabilities
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Technology That Turns
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Designs Into Reality
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:leading-8">
              MS & SS MANUFACTURING & FABRICATION — FROM IDEA TO FINISHED
              PRODUCT Laser Cutting | Laser Welding | CNC Pipe Cutting | CNC
              Bending | VMC Milling | Fabrication | PU Foaming One-Stop Solution
              for Customized Industrial Job Work & Manufacturing.
            </p>

            {/* Process */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {processPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <FaCheckCircle className="shrink-0 text-orange-400" />

                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-3.5 font-bold text-black transition duration-300 hover:scale-105"
            >
              Discuss Your Requirement
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* ================= CAPABILITY CARDS ================= */}

        <div className="mt-20 lg:mt-28">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                What We Do
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Our Manufacturing Capabilities
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-500">
              Flexible manufacturing capabilities for components, assemblies and
              fabrication requirements across multiple industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#141414] via-[#101010] to-[#090909] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_20px_60px_rgba(255,140,0,.12)] sm:p-7"
              >
                {/* Background Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Number */}

                <span className="absolute right-6 top-5 text-4xl font-black text-white/[0.04] transition duration-500 group-hover:text-orange-500/10">
                  {item.number}
                </span>

                {/* Icon */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FFC107] text-2xl text-white shadow-[0_10px_35px_rgba(255,140,0,.25)] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}

                <h3 className="relative mt-6 text-xl font-bold text-white transition duration-300 group-hover:text-orange-300">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-7 h-[3px] w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM FEATURE STRIP ================= */}

        <div className="relative mt-16 overflow-hidden rounded-[30px] border border-orange-500/20 bg-gradient-to-r from-[#111111] via-[#171717] to-[#111111] p-7 sm:p-9 lg:mt-20">
          <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-orange-500/10 blur-[80px]" />

          <div className="relative grid gap-7 md:grid-cols-3">
            {/* Quality */}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-400">
                <FaShieldAlt />
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Quality-Focused Production
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Every stage is handled with attention to accuracy and
                  consistency.
                </p>
              </div>
            </div>

            {/* Innovation */}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-xl text-yellow-400">
                <FaRegLightbulb />
              </div>

              <div>
                <h4 className="font-bold text-white">Engineering Solutions</h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Practical manufacturing approaches for unique technical
                  requirements.
                </p>
              </div>
            </div>

            {/* Partnership */}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-400">
                <FaHandsHelping />
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Customer-Centric Approach
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Clear communication and support from requirement to
                  production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
