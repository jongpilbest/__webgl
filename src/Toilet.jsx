

import React from "react"
import { useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { Camera, DirectionalLight } from "three";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Html, useGLTF, SoftShadows, ScrollControls, useScroll, useTexture } from '@react-three/drei'
const Toilet= function(){
  const colorMap = useLoader(TextureLoader, '/white_tile.jpg')
  const colorMap2 = useLoader(TextureLoader, '/blue_tile.jpg');
  const colorMap3 = useLoader(TextureLoader, '/green_tile.jpg');
  const colorMap3_rough = useLoader(TextureLoader, '/green_rough.jpg');
  const colorMap3_alpha = useLoader(TextureLoader, '/green_alpha.jpg');
  const colorMap4 = useLoader(TextureLoader, '/yellow_tile.jpg');
  //green_brihgt.jpg
  const camera_ref= useRef(null);

  const scroll = useScroll()
  const colorMap3_bright = useLoader(TextureLoader, '/green_brihgt.jpg');

  useFrame((state, delta) => {
    const r1= scroll.range(0,1/3);
    const r2 = scroll.range(1 / 3, 1 / 3);
    const r3= scroll.range (2/3,2/3);
    if(r1==0 && r2==0 && r3==0){
      state.camera.position.x=0
      state.camera.position.y= 0;
      state.camera.position.z= 4;
    }


    if(r2==0 && r1>0 && r3==0){

      state.camera.position.x= r1*-0.4;
      state.camera.position.y= r1*-2;
      state.camera.position.z= r1*1;

    }

    if(r2==1 && r1==1 && r3>0 ){
      state.camera.position.x= r3*1;
      state.camera.position.y= r3*-1;
      state.camera.position.z= r3*-1;

      

    }
  
    
    
  
   // const r2 = scroll.range(1 / 2, 1 / 2)

    //console.log(r1,"r1일때 ",r2,"r2일때");




  })


  const Light = () => {
   
    return (
      <>
        <directionalLight
        
        position={[3,1,2]}
        intensity={6.5}  />
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
      position={[0,2,-4]}
      intensity={0.5}  />
    </>
  );
 }

  const model = useLoader(GLTFLoader, '/toilet.gltf');
  return(
   
       <>

  <ambientLight intensity={0.3} />
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