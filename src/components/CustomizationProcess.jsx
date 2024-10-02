"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const steps = [
  {
    number: 1,
    title: "Choose your design",
    description: "Select color, material, and style",
  },
  {
    number: 2,
    title: "Customize your sound profile",
    description: "Pick from bass-heavy, balanced, or treble-focused",
  },
  {
    number: 3,
    title: "Finalize details",
    description: "Add engraving or choose special packaging",
  },
  {
    number: 4,
    title: "Place your order",
    description: "Receive your unique creation",
  },
];

export default function CustomizationProcess() {
  const processRef = useRef([]);
  useEffect(() => {
    processRef.current.forEach((process, index) => {
      gsap.fromTo(
        process,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: process,
            start: "top 80%",
          },
        }
      );
    });
  }, []);
  return (
    <section className="py-16 bg-main-dark text-main-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => (processRef.current[index] = el)}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-main-light text-main-dark flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/customization"
            className="inline-block px-6 py-3 text-lg font-semibold bg-main-light text-main-dark rounded-md hover:bg-white transition duration-300"
          >
            Try the Customization Tool Now
          </Link>
        </div>
      </div>
    </section>
  );
}
