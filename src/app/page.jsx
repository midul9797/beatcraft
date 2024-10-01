"use client";

import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import CustomizationProcess from "@/components/CustomizationProcess";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CustomizationProcess />
      <Reviews />
      <CallToAction />
      <Footer />
      {/* <Leva /> */}
    </>
  );
}
