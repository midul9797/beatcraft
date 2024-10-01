"use client";

import { useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingHeadphone from "@/components/FloatingHeadphone";
import { useStore } from "@/zustand/store";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSectionScene({}) {
  const isReady = useStore((state) => state.isReady);
  const { x, y, z } = useControls({
    x: 0,
    y: 0,
    z: 0,
  });
  const can1Ref = useRef(null);
  const can2Ref = useRef(null);
  const can3Ref = useRef(null);
  const can4Ref = useRef(null);
  const can5Ref = useRef(null);

  const can1GroupRef = useRef(null);
  const can2GroupRef = useRef(null);

  const groupRef = useRef(null);

  const FLOAT_SPEED = 2;

  useGSAP(() => {
    // if (
    //   !can1Ref.current ||
    //   !can2Ref.current ||
    //   !can3Ref.current ||
    //   !can4Ref.current ||
    //   !can5Ref.current ||
    //   !can1GroupRef.current ||
    //   !can2GroupRef.current ||
    //   !groupRef.current
    // )
    //   return;

    isReady();

    // Set can starting location
    gsap.set(can1Ref.current.position, { y: -8 });
    gsap.set(can1Ref.current.rotation, { z: 0.1 });

    // gsap.set(can2Ref.current.position, { x: 1.5 });
    // gsap.set(can2Ref.current.rotation, { z: 0.5 });

    // gsap.set(can3Ref.current.position, { y: 5, z: 2 });
    // gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });
    // gsap.set(can5Ref.current.position, { y: -5 });

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
      // .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
      // .from(can2GroupRef.current.rotation, { z: 3 }, 0);
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
      // Rotate can group
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // Can 1 - black cherry
      .to(can1Ref.current.position, { y: -9, z: 1.5 }, 0)
      .to(can1Ref.current.rotation, { z: 0.25 }, 0)

      // Can 2 - Lemon Lime
      // .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      // .to(can2Ref.current.rotation, { z: 0 }, 0)

      // // Can 3 - Grape
      // .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      // .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      // // Can 4 - Strawberry Lemonade
      // .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      // .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      // // Can 5 -Watermelon
      // .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      // .to(can5Ref.current.rotation, { z: -0.25 }, 0)
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3
      );
  });
  useFrame(() => {
    if (can1Ref.current) {
      // console.log(can1Ref.current.rotation);
      // can1Ref.current.rotation.set(x, y, z);
      // can1Ref.current.position.set(x, y, z);
      // console.log(can1Ref.current.position);
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingHeadphone ref={can1Ref} floatSpeed={FLOAT_SPEED} />
      </group>
      {/* <group ref={can2GroupRef}>
        <FloatingHeadphone ref={can2Ref} floatSpeed={FLOAT_SPEED} />
      </group>

      <FloatingHeadphone ref={can3Ref} floatSpeed={FLOAT_SPEED} />

      <FloatingHeadphone ref={can4Ref} floatSpeed={FLOAT_SPEED} />

      <FloatingHeadphone ref={can5Ref} floatSpeed={FLOAT_SPEED} /> */}

      <OrbitControls />
      <Environment files="/assets/hdr/lobby.hdr" environmentIntensity={1} />
    </group>
  );
}
