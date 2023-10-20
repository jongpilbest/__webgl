

import { TextureLoader } from "three";

import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial,MeshReflectorMaterial } from "@react-three/drei";
import Album_VertexShader from "./Three/Album_VertexShader";
import Album_framgentShader from "./Three/Album_fragmentShader";
import { useMemo } from "react";
import { Texture } from "three";
const Album= function(){

  const colorMap3 = useLoader(TextureLoader, `/green_1.png`);

  const colorMap2 = useLoader(TextureLoader, `/green_2.png`);
  const colorMap1 = useLoader(TextureLoader, `/green_1.png`);

  const colorMap4 = useLoader(TextureLoader, `/green_4.png`);

  
  

  
  const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => {
     // backgroundShaderRef2.current.material.uniforms.uTime.value = clock.getElapsedTime();
     ref.current.material.uniforms.uTime.value  = clock.getElapsedTime()
   
    })
    
    
  
  
   const [image] = useLoader(THREE.TextureLoader, [
      "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    ]);
    const uniforms = useMemo(
      () => ({
        uTime: {
          value: 1,
        },
        uTexture: { value: image},
  
     
      }), []
    );
  


    return (
      <mesh   ref={ref}>
          <planeGeometry args={[5, 5, 16, 16]} />
          <shaderMaterial 
             attach="material" 
             uniforms={uniforms}
             fragmentShader={Album_VertexShader}
             vertexShader={Album_framgentShader}
             />
      </mesh>
    );
  };
  


  return(
   <div style={{
    width:'100vw',
    height:'100vh',
    backgroundColor:'black'
   }}>
    <Canvas>
    <color attach="background" args={['#070707']} />
    {/*    <fog attach="fog" args={['#191920', 0, 15]} /> */}


      <OrbitControls></OrbitControls>
    <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position-z={-3.5}  position-y={0.0}  position-x={ - 2}>
            <boxGeometry    args={[3, 1.5,0.05]}  />
        
 <meshStandardMaterial 
      
      map={colorMap2} />
        </mesh>
        <mesh position-z={-3.5}  position-y={0.6}  position-x={ 0.6}>
            <boxGeometry    args={[2, 2.8,0.05]}  />
        
 <meshStandardMaterial 
      
     color='blue' />
        </mesh>
        <mesh position-z={-3.5}  position-y={-0.3}  position-x={ 2.7}>
            <boxGeometry    args={[2, 1,0.05]}  />
        
 <meshStandardMaterial 
      
     color='blue' />
        </mesh>






        <mesh  rotation-y={ - Math.PI * 0.5 } position-z={0.3}  position-y={0}  position-x={ - 3.5}>
            <boxGeometry  args={[1.8, 1.5,0.02]} />
            <meshStandardMaterial map={colorMap1} />
        </mesh>
        <mesh  rotation-y={ - Math.PI * 0.5 } position-z={2.3}  position-y={0}  position-x={ - 3.5}>
            <boxGeometry  args={[2, 1.5,0.02]} />
            <meshStandardMaterial color="pink" />
        </mesh>


        <mesh  rotation-y={ - Math.PI * 0.5 } position-z={-2}  position-y={0.8}  position-x={ - 3.5}>
            <boxGeometry  args={[2.5, 3.2,0.05]} />
            <meshStandardMaterial  map={colorMap4} />
        </mesh>

        <mesh position-y={ -1} rotation-x={ - Math.PI * 0.5 } scale={ 1.5 }>
        <planeGeometry args={[5, 5]} />
    <MeshReflectorMaterial 
   blur={[900, 900]}
   resolution={2048}
   mixBlur={1}
   mixStrength={90}
   roughness={1}
   depthScale={1.2}
   minDepthThreshold={0.4}
   maxDepthThreshold={1.4}
   color="#2D2D2D"
   metalness={0.5}/>
</mesh>


    </Canvas>

   </div>
  )  
}
export default Album;
