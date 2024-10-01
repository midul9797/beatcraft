"use client";

import { Headphones, Music, Recycle, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Headphones,
    title: "Ergonomic Design",
    description:
      "Choose from various ear cushion shapes and headband styles for a perfect fit.",
  },
  {
    icon: Music,
    title: "Premium Sound",
    description:
      "Custom-tune your audio settings or select from pre-defined sound profiles.",
  },
  {
    icon: Shield,
    title: "Durable Materials",
    description:
      "High-quality materials for longevity and superior performance.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "Replace and recycle parts for an eco-friendly solution.",
  },
];

export default function Features() {
  const featuresRef = useRef([]);

  useEffect(() => {
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: feature,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-main-light text-3xl font-bold text-center mb-12">
          Crafted for Your Comfort and Style
        </h2>
        <div className="grid md:grid-cols-2  gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              ref={(el) => (featuresRef.current[index] = el)}
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-main-light text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-main-light text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
