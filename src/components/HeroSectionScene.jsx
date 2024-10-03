"use client";

import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingHeadphone from "@/components/FloatingHeadphone";
import { useStore } from "@/zustand/store";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSectionScene({}) {
  const isReady = useStore((state) => state.isReady);

  const can1Ref = useRef(null);

  const can1GroupRef = useRef(null);

  const groupRef = useRef(null);

  const FLOAT_SPEED = 2;

  useGSAP(() => {
    if (!can1Ref.current || !can1GroupRef.current || !groupRef.current) return;

    isReady();

    gsap.set(can1Ref.current.position, { x: 1, y: -8 });
    gsap.set(can1Ref.current.rotation, { z: 0.1 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, { y: -1, x: 1 }, 0)
        .from(can1GroupRef.current.rotation, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl

      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      .to(can1Ref.current.position, { y: -9, z: 1.5 }, 0)
      .to(can1Ref.current.rotation, { z: 0.25 }, 0)

      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3
      );
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingHeadphone ref={can1Ref} floatSpeed={FLOAT_SPEED} />
      </group>
      <directionalLight position={[10, 10, 10]} intensity={1.25} />
      <directionalLight position={[-10, 10, -10]} intensity={1.25} />
      <directionalLight position={[-10, -10, 10]} intensity={1.25} />
      <directionalLight position={[10, -10, -10]} intensity={1.25} />
      <directionalLight position={[10, -5, -10]} intensity={1.25} />
      <directionalLight position={[-10, -5, -10]} intensity={1.25} />

      <OrbitControls />
      {/* <Environment files="/assets/hdr/lobby.hdr" environmentIntensity={1} /> */}
    </group>
  );
}
