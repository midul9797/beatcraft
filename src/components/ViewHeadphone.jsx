"use client";
import { Headphone } from "@/components/Headphone";
import ViewCanvas from "@/components/ViewCanvas";
import {
  CameraControls,
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  View,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";
const ViewHeadphone = () => {
  const headphoneRef = useRef(!null);

  const { x, y, z } = useControls({ x: -2, y: -8, z: 0 });

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
