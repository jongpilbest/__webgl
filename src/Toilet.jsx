

import React, { useMemo, useState } from "react"
import { useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'

import gsap from "gsap";
import * as THREE from "three";
import { Camera, DirectionalLight } from "three";

import { DirectionalLightHelper, PointLightHelper } from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Html, useGLTF, SoftShadows, ScrollControls, useScroll, useTexture, OrbitControls } from '@react-three/drei'
export const Toilet=({inputRef,data})=>{



  const colorMap3 = useLoader(TextureLoader, `/${data}_map.jpg`);
  const colorMap3_rough = useLoader(TextureLoader, `/${data}_rough.jpg`);
  const colorMap3_alpha = useLoader(TextureLoader, `/${data}_alpha.jpg`);
  const colorMap4 = useLoader(TextureLoader, `/${data}_rough.jpg`); 
  const colorMap3_bright = useLoader(TextureLoader, `/${data}_ambient.jpg`);




  //green_brihgt.jpg
 
  colorMap3.minFilter =  THREE.NearestFilter
  
  const[change,setchange]=useState(0);

  const scroll = useScroll()

    useMemo(()=>{
     console.log(change,'?')
     if(change==0){
      //console.log(name_ref.current)
      inputRef.current[1].style.display='block'
      inputRef.current[0].style.display='block'
      inputRef.current[2].style.display='none'
      //inputRef.current[3].innerText='POINT 02'
   
  
     }
     else if (change==1){

      inputRef.current[3].innerText='POINT 01'
      inputRef.current[0].style.display='none'
      inputRef.current[1].style.display='none'
      inputRef.current[2].style.display='flex'
     }
     else if (change==2){

      inputRef.current[3].innerText='POINT 02'
     }

     
   },[change])



  useFrame((state, delta) => {
    const r1= scroll.range(0,1/3);
    const r2 = scroll.range(1 / 3, 1 / 3);
    const r3= scroll.range (2/3,2/3);
  
    if(r1==0 && r2==0 && r3==0){
      state.camera.position.x=-0.2
      state.camera.position.y= 0;
      state.camera.position.z= 3.7;
      setchange(0);
    
    }


    if(r2==0 && r1>0 && r3==0){

      state.camera.position.x= r1*-0.4;
      state.camera.position.y= r1*-2;
      state.camera.position.z= r1*1;
      setchange(1);
      //name_ref.current.style.display='none'
    }

    if(r2==1 && r1==1 && r3>=0 ){
      state.camera.position.x= r3*1;
      state.camera.position.y= r3*-1;
      state.camera.position.z= r3*-1;
     setchange(2);
      

    }
  
    
    
  
   // const r2 = scroll.range(1 / 2, 1 / 2)

    //console.log(r1,"r1일때 ",r2,"r2일때");




  })


  const Light = () => {
   
    return (
      <>
        <directionalLight
        
        position={[3,1,2]}
        intensity={4}  />
      </>
    );
  };

 const Point_Light=()=>{
  const pointLight = useRef()
 // useHelper(pointLight, DirectionalLightHelper, 0.5, "hotpink")

  return (
    <>
      <directionalLight
      ref={pointLight}
      position={[1,1,-2]}
      intensity={0.3}  />
    </>
  );
 }

  const model = useLoader(GLTFLoader, '/toilet.gltf');
  return(
   
       <>

  <ambientLight intensity={0.6} />
 <Light></Light>

<Point_Light></Point_Light>
 <perspectiveCamera

   fov={40}
 position={ [0.5,-2 ,-5] }>
 <mesh

   position={[0,-1,2.3]}
 rotation-x={Math.PI * -0.5}>
      <planeGeometry 
    
      args={[11, 5.2]} />
      <meshStandardMaterial 
          metalnessMap ={colorMap4}
         roughnessMap={colorMap3_rough}
          normalMap={colorMap3_alpha}
          ambientLight={colorMap3_bright}
      map={colorMap3} />
    </mesh>
    <primitive 
    scale={[1,1,1]}
    rotation-y={Math.PI *0.5}
    position={[0,-1,2.2]}
    
    object={model.scene}  />
    </perspectiveCamera>
    
    </>   
  )
}

export default Toilet