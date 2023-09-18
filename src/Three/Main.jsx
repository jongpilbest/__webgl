

import React from "react";
import back from '../assets/back-1.png'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader,useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import { useRef } from "react";

const Main= function(){

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
     console.log(mesh.current.material.uniforms.u_time)
  
  });

  const uniform = {
    uColor: new THREE.Color(1.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    uTime: 0,
    distanceFromCenter: 0,
  };
  const mesh = useRef();
  const colorMap = useLoader(TextureLoader, back)
  colorMap.encoding = THREE.sRGBEncoding;
return(
   <>
     <mesh ref={mesh}  >
       <planeGeometry  args={[14,8,15,9]}    />
       <planeShaderMaterial

          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniform}
       attach="material"
       toneMapped={false}
       map={colorMap} />
       </mesh>
   </>
)

}

export default Main;
