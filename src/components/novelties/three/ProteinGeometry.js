/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

const protein_name = "/1fsd.gltf"

export function ProteinModel(props) {
  const { nodes, materials } = useGLTF(protein_name);
  const geometry = nodes["node-geom0"].geometry
  geometry.computeBoundingBox()
  geometry.center()
  return (

    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={134.91}
        near={87.79}
        fov={20}
        position={[0, 0, 111.35]}
      />
      <mesh
        geometry={nodes["node-geom0"].geometry}
        position={[0.06, 0.07, -0.11]}
      >
        <meshStandardMaterial wireframe color={'rgb(220,211,251)'} />

      </mesh>
    </group>

    // geometry
  );
}

useGLTF.preload(protein_name);
