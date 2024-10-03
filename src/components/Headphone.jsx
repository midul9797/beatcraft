"use client";

import { useStore } from "@/zustand/store";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

useGLTF.preload("/assets/headphones/headphone.glb");

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export function Headphone({ scale = 0.1, page = "home", ...props }) {
  const { nodes, materials } = useGLTF("/assets/headphones/headphone.glb");
  const { colors, tempColors, activePart } = useStore();

  useEffect(() => {
    console.log(materials.Headpad);
    if (page === "home") {
      const fixedColors = {
        headband: "#000000",
        cushions: "#CCCCCC",
        speakerCups: "#333333",
        slider: "#666666",
        innerCushions: "#FFFFFF",
        headpad: "#FFFFFF",
      };
      materials.Headpad.color = new THREE.Color(fixedColors.headpad);
      materials["Headband.001"].color = new THREE.Color(fixedColors.headband);
      materials.Cushions.color = new THREE.Color(fixedColors.cushions);
      materials.Inner_Cushions.color = new THREE.Color(
        fixedColors.innerCushions
      );
      materials.Speaker_cups.color = new THREE.Color(fixedColors.speakerCups);
      materials.Slider.color = new THREE.Color(fixedColors.slider);
    } else {
      materials.Headpad.color = new THREE.Color(
        activePart === "headpad" ? tempColors.headpad : colors.headpad
      );

      materials["Headband.001"].color = new THREE.Color(
        activePart === "headband" ? tempColors.headband : colors.headband
      );
      materials.Cushions.color = new THREE.Color(
        activePart === "cushions" ? tempColors.cushions : colors.cushions
      );
      materials.Inner_Cushions.color = new THREE.Color(
        activePart === "innerCushions"
          ? tempColors.innerCushions
          : colors.innerCushions
      );
      materials.Speaker_cups.color = new THREE.Color(
        activePart === "speakerCups"
          ? tempColors.speakerCups
          : colors.speakerCups
      );
      materials.Slider.color = new THREE.Color(
        activePart === "slider" ? tempColors.slider : colors.slider
      );
    }
  }, [page, materials, colors, tempColors, activePart]);

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Slider.geometry}
        material={materials.Slider}
        position={[-54.591, 73.43, 143.64]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Headpad001.geometry}
        material={materials.Headpad}
        position={[-54.754, 61.028, 142.843]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Headband001.geometry}
        material={materials["Headband.001"]}
        position={[-54.598, 69.993, 143.53]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker_cups.geometry}
        material={materials.Speaker_cups}
        position={[-54.603, 53.624, 143.439]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inner_Cushions.geometry}
        material={materials.Inner_Cushions}
        position={[-54.602, 56.023, 143.462]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushions001.geometry}
        material={materials.Cushions}
        position={[-54.589, 56.313, 143.667]}
        rotation={[0, 1.571, 0]}
      />
    </group>
  );
}
