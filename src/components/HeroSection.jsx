"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { TextSplitter } from "@/components/TextSplitter";

import { useStore } from "@/zustand/store";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import HeroSectionScene from "./HeroSectionScene";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Hero`.
 */

/**
 * Component for "Hero" Slices.
 */
const HeroSection = () => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power1.in",
          delay: 0.1,
          stagger: 0.4,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=0.3"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.1,
        })
        .to(".hero-button", {
          opacity: 1,
          y: 0,
          duration: 0.1,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl

        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
      <div className="hero opacity-0">
        {isDesktop && (
          <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen lg:block">
            <HeroSectionScene />
          </View>
        )}

        <div className="grid w-full md:w-[60%] text-center md:text-left">
          <div className="grid items-center h-[80vh] lg:h-screen xs:ml-10 md:ml-20 lg:ml-30">
            <div className="grid auto-rows-min">
              <h1 className="hero-header text-[60px] font-black uppercase leading-[.8] text-main-light md:text-[100px]  lg:text-[120px]">
                <TextSplitter
                  text={"Your Headsets"}
                  // wordDisplayStyle="block"
                  className="hero-header-word"
                />
              </h1>
              <h1 className="hero-subheading mt-5 text-[40px] font-black uppercase leading-[.8] text-main-light md:text-[60px] lg:text-[80px]">
                <TextSplitter
                  text={"Your Style"}
                  // wordDisplayStyle="block"
                  // className="hero-header-word"
                />
              </h1>
              <div className="hero-body mt-8 text-main-light text-md md:text-lg lg:text-xl font-sans font-thin w-[100%] md:w-[70%]">
                <p>
                  Craft the perfect listening experience with fully customizable
                  headphones. Comfort, sound, and style tailored to you.
                </p>
              </div>

              <Link
                href="/customization"
                className="hero-button w-fit mt-8 px-6 py-3 mx-auto md:mx-0 text-base md:text-md lg:text-lg font-semibold bg-main-light text-main-dark rounded-3xl hover:bg-white transition duration-300"
              >
                Customize
              </Link>
            </div>
          </div>

          <div className="text-side relative z-[80] grid h-[70vh] items-center md:ml-10 lg:ml-20 ">
            <div className="space-y-4">
              <p className="text-side-heading text-balance text-3xl font-black uppercase text-main-light md:4xl lg:text-5xl">
                Why Customize?
              </p>
              <ul className="list-none list-inside space-y-2 md:pl-8">
                <li className="text-body text-balance text-md md:text-lg lg:text-xl font-normal text-main-light">
                  <TextSplitter text={"Personal fit for maximum comfort"} />
                </li>
                <li className="text-body text-balance text-md md:text-lg lg:text-xl font-normal text-main-light">
                  <TextSplitter
                    text={
                      "Tailored sound profiles for unique audio experiences"
                    }
                  />
                </li>
                <li className="text-body text-balance text-md md:text-lg lg:text-xl font-normal text-main-light">
                  <TextSplitter
                    text={
                      "Express your personal style with colors, materials, and engravings"
                    }
                  />
                </li>
                <li className="text-body text-balance text-md md:text-lg lg:text-xl font-normal text-main-light">
                  <TextSplitter
                    text={
                      "Replaceable components for sustainability and longevity"
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
