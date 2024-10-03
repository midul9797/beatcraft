import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import CustomizationProcess from "@/components/CustomizationProcess";
import Reviews from "@/components/Reviews";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />\
      <div id="features">
        <Features />
      </div>
      <CustomizationProcess />
      <Reviews />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
