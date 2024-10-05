"use client";
import { Headphone } from "@/components/Headphone";
import { Center, OrbitControls } from "@react-three/drei";

import React from "react";

const ViewHeadphone = () => {
  return (
    <>
      {/* <Environment files="/assets/hdr/lobby.hdr" environmentIntensity={0.5} /> */}
      {/* <ambientLight intensity={1} /> */}
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, 10, -10]} intensity={1} />
      <directionalLight position={[-10, -10, 10]} intensity={1} />
      <directionalLight position={[10, -10, -10]} intensity={1} />
      <directionalLight position={[10, -5, -10]} intensity={1} />
      <directionalLight position={[-10, -5, -10]} intensity={1} />
      <Center>
        <group position={[-2, -8, 0]} scale={0.3}>
          <Headphone page="customization" />
        </group>
      </Center>
      <OrbitControls makeDefault />
    </>
  );
};

export default ViewHeadphone;
