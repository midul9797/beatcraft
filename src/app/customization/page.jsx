"use client";
import { Headphone } from "@/components/Headphone";
import ViewCanvas from "@/components/ViewCanvas";
import ViewHeadphone from "@/components/ViewHeadphone";
import {
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  View,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

const Customization = () => {
  const cameraRef = useRef(null);
  const objectRef = useRef(null);
  //   const { camera } = useThree();
  //   if (camera && objectRef.current) {
  //     camera.lookAt(objectRef.current.position);
  //   }

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 overflow-hidden bg-main-dark z-50">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
          position: [0, 0, 5],
        }}
      >
        <ViewHeadphone />
      </Canvas>
    </div>
  );
};

export default Customization;
