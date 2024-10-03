"use client";
import CustomizePanel from "@/components/CustomizePanel";
import { Headphone } from "@/components/Headphone";
import ViewCanvas from "@/components/ViewCanvas";
import ViewHeadphone from "@/components/ViewHeadphone";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  View,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Link from "next/link";
import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
const Customization = () => {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    // Renderer and scene setup code here

    return () => {
      renderer.dispose(); // Dispose of the renderer to free up the context
    };
  }, []);

  return (
    <body className="w-full h-[100vh] fixed top-0 left-0 overflow-hidden bg-main-dark">
      <Link
        href={"/home"}
        className="text-main-light absolute top-0 left-0 text-md md:text-xl lg:text-2xl font-bold p-4 z-50"
      >
        Beatcraft
      </Link>
      <Canvas
        style={{ width: "clamp(400px, 70vw, 100%)", height: "100vh" }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
          position: [0, 0, 5],
        }}
      >
        <Suspense fallback={<Loader />}>
          <ViewHeadphone />
        </Suspense>
      </Canvas>

      <CustomizePanel />
    </body>
  );
};

export default Customization;
