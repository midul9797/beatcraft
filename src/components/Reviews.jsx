"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Dakota Johnson",
    quote:
      "These custom headphones are a game-changer. The comfort and sound quality are unmatched!",
    image: "https://i.pravatar.cc/100?img=38",
  },
  {
    name: "Sarah Lee",
    quote:
      "I love how I could tailor every aspect of my headphones. They are perfect for my needs.",
    image: "https://i.pravatar.cc/100?img=21",
  },
  {
    name: "Mike Brown",
    quote:
      "The customization process was fun and easy. The end result exceeded my expectations.",
    image: "https://i.pravatar.cc/100?img=61",
  },
];

export default function Testimonials() {
  const testimonialsRef = useRef([]);

  useEffect(() => {
    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
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
            trigger: testimonial,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hear from Our Happy Customers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-main p-6 rounded-lg shadow-md"
              ref={(el) => (testimonialsRef.current[index] = el)}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className=" font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-main-extraDark text-muted-foreground italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
