"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What services does SALIM INNOVATIONS provide?",
      answer:
        "We specialize in MS (Mild Steel) and SS (Stainless Steel) manufacturing, including laser cutting, fabrication,Laser welding, assembly, CNC Pipe Cutting | CNC Bending | VMC Milling | Fabrication and PU Foaming .",
    },
    {
      question: "Do you take custom design projects?",
      answer:
        "Yes, we handle custom design and fabrication projects tailored to client requirements.",
    },
    {
      question: "How do you ensure quality and timely delivery?",
      answer:
        "Every project is executed with strict quality control and delivered on time to ensure customer satisfaction.",
    },
    {
      question: "How much experience does SALIM INNOVATIONS have?",
      answer:
        "We have over 15 years of excellence and experience in industrial manufacturing and fabrication.",
    },
    {
      question: "How can I contact SALIM INNOVATIONS?",
      answer:
        "You can reach us at 📞 +91 9560568272 or 📧 saliminnovations@gmail.com.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-black py-8 lg:py-10">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-400">
            FAQ
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-white ">
            Frequently{" "}
            <span className="text-1xl md:text-2xl  bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Find answers to the most common questions about our laser cutting,
            fabrication, manufacturing, and custom engineering services.
          </p>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"></div>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300
                ${
                  isOpen
                    ? "border-orange-500 bg-gradient-to-r from-[#1b1b1b] to-[#242424] shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                    : "border-white/10 bg-[#121212]/80 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition
                      ${
                        isOpen
                          ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black"
                          : "bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <FaChevronDown
                    className={`text-xl text-orange-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 pb-6 pt-5">
                      <div className="flex gap-4">
                        <div className="w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400"></div>

                        <p className="leading-8 text-gray-300">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
