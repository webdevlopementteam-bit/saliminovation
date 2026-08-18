"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-orange-400">
              Contact Us
            </span>

            <h2 className="mt-6 text-2xl md:text-3xl  font-bold leading-tight text-white">
              Have Any Query?
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Feel Free To Contact Us
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm sm:text-base leading-7 text-gray-400">
              Whether you need laser cutting, CNC fabrication, welding, or
              custom manufacturing solutions, our experienced team is ready to
              assist you. Contact us today for a quick response and customized
              quotation.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-6">
              {/* Email Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-orange-500/20 bg-[#111111] p-5 transition hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Email Address
                  </h4>
                  <p className="text-gray-400">
                    <Link
                      href="mailto:saliminnovations@gmail.com"
                      className="hover:text-orange-400 break-words"
                    >
                      saliminnovations@gmail.com
                    </Link>
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-orange-500/20 bg-[#111111] p-5 transition hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Call Anytime
                  </h4>
                  <p className="text-gray-400">
                    <Link
                      href="tel:+919560568272"
                      className="hover:text-orange-400"
                    >
                      +91 9560568272
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-orange-500/20 bg-[#111111] p-6 sm:p-8 shadow-2xl shadow-orange-500/10">
            <h3 className="mb-6 sm:mb-8 text-2xl md:text-3xl font-bold text-white">
              Send Message
            </h3>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-orange-500/20 bg-black px-4 py-3 sm:px-5 sm:py-4 text-white outline-none transition focus:border-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-orange-500/20 bg-black px-4 py-3 sm:px-5 sm:py-4 text-white outline-none transition focus:border-orange-500"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-orange-500/20 bg-black px-4 py-3 sm:px-5 sm:py-4 text-white outline-none transition focus:border-orange-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-orange-500/20 bg-black px-4 py-3 sm:px-5 sm:py-4 text-white outline-none transition focus:border-orange-500"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Write Your Message..."
                className="w-full rounded-xl border border-orange-500/20 bg-black px-4 py-3 sm:px-5 sm:py-4 text-white outline-none transition focus:border-orange-500"
              ></textarea>

              <button
                type="button"
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3 sm:py-4 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 sm:mt-20">
        <iframe
          title="Google Map"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
