"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Alex Robin",
    role: "Senior Laser Engineer",
    image: "/images/team-1.jpg",
  },
  {
    name: "Andrew Bon",
    role: "Production Manager",
    image: "/images/team-2.jpg",
  },
  {
    name: "Martin Thompson",
    role: "Quality Inspector",
    image: "/images/team-3.jpg",
  },
  {
    name: "Clarabelle Samber",
    role: "Design Engineer",
    image: "/images/team-4.jpg",
  },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[170px]" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FFB300]">
            Our Team
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Meet Our
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] bg-clip-text text-transparent">
              {" "}
              Expert Professionals
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Our experienced engineers and technicians are committed to
            delivering precision laser cutting and fabrication solutions with
            the highest standards of quality and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-orange-500/20 bg-[#111111] transition duration-500 hover:-translate-y-3 hover:border-orange-400 hover:shadow-[0_15px_40px_rgba(255,122,0,.25)]"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Social Icons */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 translate-y-8 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {[
                    <FaFacebookF key="fb" />,
                    <FaTwitter key="tw" />,
                    <FaLinkedinIn key="ln" />,
                    <FaYoutube key="yt" />,
                  ].map((icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/30 bg-[#111111]/90 text-white transition duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FFC107]"
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 text-center">
                <h3 className="text-2xl font-bold text-white transition group-hover:text-[#FFC107]">
                  {member.name}
                </h3>

                <div className="mx-auto my-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107]" />

                <p className="uppercase tracking-[3px] text-sm font-semibold text-[#FFB300]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
