"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { QuestionModel } from "./QuestionModel";
import { Environment, OrbitControls } from "@react-three/drei";

const faqs = [
  {
    question: "How long does the customization process take?",
    answer:
      "The customization process typically takes 2-3 weeks from order to delivery, depending on the complexity of your design.",
  },
  {
    question: "Can I change my design after ordering?",
    answer:
      "We allow minor changes within 24 hours of placing your order. After that, modifications may not be possible.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We offer a 2-year warranty on all custom headphones, covering manufacturing defects and normal wear and tear.",
  },
  {
    question: "Are the components replaceable or upgradeable?",
    answer:
      "Yes, most components are replaceable and upgradeable. This allows you to refresh your headphones or adapt to new technologies over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="block md:flex justify-between items-center py-16 bg-main-dark"
    >
      <div className="container mx-auto md:ml-5 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-main-light rounded-lg shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-main-dark text-base md:text-sm lg:text-base">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-main-dark" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-main-dark" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-transparent rounded-lg shadow-md">
                  <p className="text-muted-foreground text-main-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-[30%] lg:w-[60%]  h-[50vh] lg:h-[70vh] pt-[35px]">
        <Canvas>
          <Environment
            files="/assets/hdr/lobby.hdr"
            environmentIntensity={0.75}
          />
          <QuestionModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
