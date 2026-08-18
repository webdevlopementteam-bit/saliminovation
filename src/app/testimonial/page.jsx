"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    profession: "Automotive Industry",
    image: "/images/testimonial-1.jpg",
    review:
      "Salim Innovations delivered precision MS & SS laser cutting for our automotive components. The accuracy and finishing were outstanding.",
  },
  {
    name: "Amit Verma",
    profession: "Construction Client",
    image: "/images/testimonial-2.jpg",
    review:
      "Their CNC pipe and tube cutting services helped us achieve complex designs with ease. Truly advanced machinery and skilled professionals.",
  },
  {
    name: "Deepak Singh",
    profession: "Furniture Manufacturer",
    image: "/images/testimonial-3.jpg",
    review:
      "We received custom fabrication and assembly solutions with premium quality. Timely delivery and excellent workmanship exceeded expectations.",
  },
  {
    name: "Mohit Kumar",
    profession: "Engineering Company",
    image: "/images/team-2.jpg",

    review:
      "Salim Innovations provided welding and finishing services that improved our production standards. Their commitment to quality is unmatched.",
  },
  {
    name: "Sneha Patel",
    profession: "Electronics Industry",
    image: "/images/testimonial-4.jpg",

    review:
      "Customer satisfaction is truly their priority. From design to final product, every step was handled with professionalism and care.",
  },
];

export default function Testimonial() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className="relative overflow-hidden bg-[#030303] py-8 sm:py-14 lg:py-20">
      {/* Background Effects */}
      <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-yellow-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[3px] text-orange-400">
            ★ Testimonials
          </span>

          <div className="mt-4">
            <span className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-4xl">
              What Our{" "}
            </span>
            <span className="block sm:block md:block lg:inline bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {" "}
              Clients Say
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            We deliver premium laser cutting, fabrication and engineering
            solutions with unmatched precision, quality and customer
            satisfaction.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={900}
          spaceBetween={25}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: ".service-prev", nextEl: ".service-next" }}
          pagination={{ el: ".service-pagination", clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="py-4">
              <div className="px-2">
                <div
                  className="
                  group relative overflow-hidden rounded-2xl sm:rounded-3xl
                  border border-orange-500/20 bg-gradient-to-br
                  from-[#1d1d1d] via-[#111111] to-[#050505]
                  p-6 sm:p-8 transition-all duration-500
                  hover:-translate-y-2 hover:border-orange-400
                  hover:shadow-[0_20px_60px_rgba(255,120,0,0.35)]
                "
                >
                  {/* Profile */}
                  <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full border-[4px] border-white/10 ring-2 ring-orange-500/40 shadow-[0_0_20px_rgba(255,120,0,0.45)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-orange-300">
                        {item.profession}
                      </p>
                      <div className="mt-2 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-400 drop-shadow-[0_0_6px_rgba(255,220,0,0.8)] text-xs sm:text-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

                  {/* Review */}
                  <div className="relative z-10">
                    <p className="h-[140px] text-sm sm:text-base md:text-lg leading-relaxed text-white/95 overflow-hidden">
                      "{item.review}"
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
