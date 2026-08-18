import React from "react";
import About from "./about/page";
import Features from "./features/page";
import Services from "./services/page";
import Testimonial from "./testimonial/page";
import ScrollToTopButton from "@/sections/ScrollTop";
import FAQ from "@/sections/FAQ";
import ProductSection from "@/sections/ProductSection";
import { Hero } from "@/components/Hero";

function page() {
  return (
    <>
      <Hero />
      <About />
      <ProductSection />
      <Features />
      <Services />
      <Testimonial />
      <FAQ />
      <ScrollToTopButton />
    </>
  );
}

export default page;
