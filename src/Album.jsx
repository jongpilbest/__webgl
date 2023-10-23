import { Color } from "three";

import { TextureLoader } from "three";
import Vertex_shader from './Shaders/Vertex_shader'
import Fragment_Shader from './Shaders/Fragment_Shader'
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial,MeshReflectorMaterial } from "@react-three/drei";
import Album_VertexShader from "./Three/Album_VertexShader";
import Album_framgentShader from "./Three/Album_fragmentShader";
import { useMemo } from "react";
import { Texture } from "three";
import vertexShader from "./Three/vertexShader";
const Album= function(){

  const colorMap3 = useLoader(TextureLoader, `/build_1.png`);
  const colorMap3_1 = useLoader(TextureLoader, `/build_2.png`);
  const colorMap3_2 = useLoader(TextureLoader, `/bg2.jpg`);


  const colorMap2 = useLoader(TextureLoader, `/green_2.png`);
  const colorMap1 = useLoader(TextureLoader, `/green_1.png`);

  const colorMap4 = useLoader(TextureLoader, `/green_4.png`);

  const colorMap5 = useLoader(TextureLoader, `/sd1.png`);


  const colorMap5_1 = useLoader(TextureLoader, `/sd2.png`);
  
  const colorMap5_2 = useLoader(TextureLoader, `/sd3.jpeg`);
  



  const backgroundShaderRef2 = useRef(null)
  
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


  const First=()=>{
  const backgroundShaderRef2=useRef(null)
    useFrame(({ clock }) => {
      backgroundShaderRef2.current.material.uniforms.uTime.value = clock.getElapsedTime();
    
    })
  



    return(
      <>
    
      <mesh

      ref={backgroundShaderRef2} 
                rotation-y={ -Math.PI * 0.2 }
              position-z={-3.5}  position-y={1.0}  position-x={ -1.5}>
                  <boxGeometry    args={[3, 5.5,0.05]}  />
              
                  <shaderMaterial
              attach="material" 
              fragmentShader={Fragment_Shader}
              vertexShader={Vertex_shader}
              uniforms={uniforms}
            />
      
      
      
              </mesh>
              <mesh
      ref={backgroundShaderRef2} 
     rotation-y={ Math.PI * 0.2 }
   position-z={-1.5}  position-y={.0}  position-x={ -4.5}>
       <boxGeometry    args={[3, 4.5,0.05]}  />
   
       <shaderMaterial
   attach="material" 
   fragmentShader={Fragment_Shader}
   vertexShader={Vertex_shader}
   uniforms={uniforms}
 />



   </mesh>
   <mesh
           ref={backgroundShaderRef2} 
          rotation-y={ Math.PI * 0.2 }
        position-z={-2}  position-y={3}  position-x={ -3.6}>
            <boxGeometry    args={[2, 2.5,0.05]}  />
        
            <shaderMaterial
        attach="material" 
        fragmentShader={Fragment_Shader}
        vertexShader={Vertex_shader}
        uniforms={uniforms}
      />



        </mesh>


        <mesh
           ref={backgroundShaderRef2} 
             rotation-y={ Math.PI * 0.15 }
        position-z={-0.8}  position-y={0}  position-x={ 1.5}>
            <boxGeometry    args={[2, 3,0.0]}  />
        
            <shaderMaterial
        attach="material" 
        fragmentShader={Fragment_Shader}
        vertexShader={Vertex_shader}
        uniforms={uniforms}
      />



        </mesh>
         
        <mesh 
           ref={backgroundShaderRef2} 
     rotation-y={ - Math.PI * 0.15 }
        position-z={0.5}  position-y={0}  position-x={ 3.5}>
            <boxGeometry    args={[2, 4,0.05]}  />
        
            <shaderMaterial
        attach="material" 
        fragmentShader={Fragment_Shader}
        vertexShader={Vertex_shader}
        uniforms={uniforms}
      />



        </mesh>


        <mesh 
           ref={backgroundShaderRef2} 
     rotation-y={- Math.PI * 0.2 }
        position-z={-0.8}  position-y={2.9}  position-x={ 2}>
            <boxGeometry    args={[2, 2,0.05]}  />
        
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
  


  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      u_colorB: { value: new Color("#C7E7FF") },
      u_colorA: { value: new Color("#E0FFFF") },

   
    }), []
  );

  


  return(
   <div style={{
    width:'100vw',
    height:'100vh',
    backgroundColor:'black'
   }}>


    
    <Canvas>

    
   <OrbitControls></OrbitControls>
    <color attach="background" args={['#070707']} />


   
    <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh    
          position-z={-5}  position-y={-1.5}  position-x={ -0.5}
        
          rotation-x={ -Math.PI * 0.5 }
   
        scale={ 1.5 }>
        <boxGeometry   
       
       
        args={[15, 15,0.05]}  />
           <MeshReflectorMaterial 
   blur={[900, 900]}
   resolution={2048}
   mixBlur={1}
   mixStrength={90}
   roughness={1}
   depthScale={1.2}
   mirror={0}
   minDepthThreshold={0.4}
   maxDepthThreshold={1.4}
   color="#2D2D2D"

   metalness={2}/>
</mesh>

 <First></First>



      

        <pointLight
   
        position={[0, 1.1, -2]} intensity={9} />   


     

    





      


    </Canvas>

   </div>
  )  
}
export default Album;
