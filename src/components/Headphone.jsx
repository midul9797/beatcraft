"use client";

import { useFBO, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

useGLTF.preload("/assets/headphones/headphone.glb");

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export function Headphone({ scale = 0.1, ...props }) {
  const { nodes, materials } = useGLTF("/assets/headphones/headphone.glb");
  const [color, setColor] = useState("red");
  materials.Headpad.color = new THREE.Color("#7B3F00");
  materials["Headband.001"].color = new THREE.Color("#7B3F00");

  // Fixes upside down labels
  //   labels.strawberryLemonade.flipY = false;
  //   labels.blackCherry.flipY = false;
  //   labels.watermelon.flipY = false;
  //   labels.grape.flipY = false;
  //   labels.lemonLime.flipY = false;

  //   const label = labels[flavor];
  // useFrame((state, delta) => {

  //   }
  // });
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
