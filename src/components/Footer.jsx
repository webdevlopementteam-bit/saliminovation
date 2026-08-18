"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";

const galleryImages = [
  "/images/s2.png",
  "/images/service-2.jpg",
  "/images/service-3.jpg",
  "/images/service-7.jpg",
  "/images/service-5.jpg",
  "/images/service-6.jpg",
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
  { name: "Products", href: "/products" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-300 border-t border-orange-500/20 ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Office */}
          <div>
            <h3 className="relative inline-block text-2xl font-bold text-white mb-8">
              Our Office
              <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107]" />
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#FF7A00]" />
                <p className="text-gray-400">123 Street, New York, USA</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#FF7A00]" />
                <p className="text-gray-400">+91 9560568272</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#FF7A00]" />
                <p className="text-gray-400">saliminnovations@gmail.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[
                <FaFacebookF key="fb" />,
                <FaTwitter key="tw" />,
                <FaYoutube key="yt" />,
                <FaLinkedinIn key="ln" />,
              ].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/20 bg-[#151515] text-white transition-all duration-300 hover:scale-110 hover:border-orange-400 hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FFC107] hover:shadow-lg hover:shadow-orange-500/30"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative inline-block text-2xl font-bold text-white mb-8">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107]" />
            </h3>

            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-2 hover:text-[#FFC107]"
                >
                  <FaChevronRight className="text-xs text-[#FF7A00] transition group-hover:text-[#FFC107]" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="relative inline-block text-2xl font-bold text-white mb-8">
              Business Hours
              <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107]" />
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold uppercase tracking-wide text-white">
                  Monday - Friday
                </h4>
                <p className="mt-1 text-gray-400">09:00 AM - 07:00 PM</p>
              </div>

              <div>
                <h4 className="font-semibold uppercase tracking-wide text-white">
                  Saturday
                </h4>
                <p className="mt-1 text-gray-400">09:00 AM - 12:00 PM</p>
              </div>

              <div>
                <h4 className="font-semibold uppercase tracking-wide text-white">
                  Sunday
                </h4>
                <p className="mt-1 text-red-400 font-medium">Closed</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="relative inline-block text-2xl font-bold text-white mb-8">
              Gallery
              <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107]" />
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative h-24 overflow-hidden rounded-xl border border-orange-500/20"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 transition group-hover:bg-orange-500/20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <section className="border-t border-orange-500/20 bg-[#080808] py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row">
            <p>
              © {year}{" "}
              <Link
                href="/"
                className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] bg-clip-text font-bold text-transparent"
              >
                SALIM INNOVATIONS
              </Link>
              . All Rights Reserved.
            </p>

            <p>
              Designed & Developed by{" "}
              <Link
                href="/"
                className="bg-gradient-to-r from-[#FF7A00] to-[#FFC107] bg-clip-text font-bold text-transparent"
              >
                CYBERTRICKS Media Pvt Ltd
              </Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
