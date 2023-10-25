import React from "react";
import react, { useMemo, useRef,useState } from 'react'
// Three
import './App.css'
import * as THREE from 'three'
// R3F and Drei
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
// Shaders

import { TextureLoader } from "three";

import Tile_intro from './Three/Tile_intro'
import Fragment_Shader from './Shaders/Fragment_Shader'
import Tile_shader from "./Three/Tile_shader";
import { Color } from "three";

import Scene2 from "./Background_Three";

function GOgo() {
  const backgroundShaderRef2 = useRef(null)
 

  useFrame(({ clock }) => {
    backgroundShaderRef2.current.material.uniforms.uTime.value = clock.getElapsedTime();
   
  })


  const colorMap3 = useLoader(TextureLoader, `/tile_change_1.jpg`);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
      uTexture: { value: colorMap3 }
   
    }), []
  );

  return (<>
 
      <mesh 
  
      ref={backgroundShaderRef2} 
      position={[0, 0, 0]}>
    <planeGeometry args={[2.5, 1.2, 16, 16]}  />
       <shaderMaterial
        attach="material" 
        fragmentShader={Tile_shader}
        vertexShader={Tile_intro}
        uniforms={uniforms}
      />
      </mesh>
    </>
  )
}
const Second= function(){


return(
  
< div  style={{
            width:'100vw',
            height:'100vh',
            position:'relative',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            backgroundColor:'white',
            justifyContent:'center'
           
           }}>
           
     
          
     <Canvas camera={{ position: [0, 0, 1] }}>

      <Scene2 />

   

</Canvas>

<div style={{
  position:'absolute',
  width:'70%',
  height:'60%',
  zIndex:2,

  display:'flex',
  justifyContent:'center'
  

}}>
  <div style={{
   zIndex:2
  
  
  }}>
     <p className="Tile_name">
            Ceramic
            </p>
            <p className="Tile_name_1">
            Tiles 
            </p>
  </div>
          
   <div style={{
     position:'absolute',
     width:'100%',
     height:'100%'

   }}>
     <Canvas camera={{ position: [0, 0, 1] }}>


<GOgo></GOgo>

</Canvas>
   </div>

</div>
<div 
           
           style={{
            position:'absolute',
            bottom:'3%',
            left:'10%'
           }}
           >
             <p className='S_p'> DALTILE tile</p>
             <p 
              style={{
                fontSize:'3vw'
              }}
             className='S_p'>SHOWCASE</p>
           </div>

</div>

)
}
export default Second