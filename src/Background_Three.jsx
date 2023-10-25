import react, { useEffect, useRef,useState } from 'react'
// Three
import './App.css'
import * as THREE from 'three'
// R3F and Drei
import { Canvas, useFrame } from '@react-three/fiber'




import Vertex_shader from './Shaders/Vertex_shader'
import Fragment_Shader from './Shaders/Fragment_Shader'

import { Color } from "three";


import { useMemo } from 'react'


function Scene2() {
  const backgroundShaderRef2 = useRef(null)
 
  const mesh = useRef();
  useFrame(({ clock }) => {
    backgroundShaderRef2.current.material.uniforms.uTime.value = clock.getElapsedTime();

 
  })
 //console.log(backgroundShaderRef2.current.material.uniforms.uTime)


  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      u_colorB: { value: new Color("#accbee") },
      u_colorA:{ value: new Color("#e7f0fd")}
   
    }), []
  );

  return (<>
 
      <mesh 
      ref={backgroundShaderRef2} 
      position={[0, 0, 0]}>
       <planeGeometry args={[8, 10, 16, 16]} />
       <shaderMaterial
        attach="material" 
        fragmentShader={Fragment_Shader}
        vertexShader={Vertex_shader}
        uniforms={uniforms}
      />

      </mesh>
    </>
  )
}

export default Scene2