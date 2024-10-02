"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="py-16 bg-main text-main-extraDark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Create Your Own Custom Headphones Today!
        </h2>
        <p className="mb-8">
          Experience the perfect blend of comfort, sound, and style tailored
          just for you.
        </p>
        <Link
          href="/customization"
          className="inline-block px-6 py-3 text-lg font-semibold bg-main-light text-main-dark rounded-md hover:bg-white transition duration-300"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
