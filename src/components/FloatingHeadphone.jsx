"use client";

import { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";

import { Headphone } from "@/components/Headphone";
import { Group } from "three";

const FloatingHeadphone = forwardRef(
  (
    {
      floatSpeed = 0.5,
      rotationIntensity = 0,
      floatIntensity = 1,
      floatingRange = [-0.2, 0.2],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          autoInvalidate
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <Headphone page="home" />
        </Float>
      </group>
    );
  }
);

FloatingHeadphone.displayName = "FloatingHeadphone";

export default FloatingHeadphone;
