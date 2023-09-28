import react, { useEffect, useRef,useState } from 'react'
// Three
import './App.css'
import * as THREE from 'three'
// R3F and Drei
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
// Shaders
import play from './assets/play.svg'
import Vetor from './assets/Vector.svg'
import circle from './assets/rotate.svg'



import Vertex_shader from './Shaders/Vertex_shader'
import Fragment_Shader from './Shaders/Fragment_Shader'

import { Color } from "three";


import BackgroundShader from './Shaders/BackgroundShader'
import SphereShaderMaterial from './Shaders/SphereShaderMaterial'
import RightgrondShader from './Shaders/Shaders/rightgrondShader'
import Video from './Video'
import { useMemo } from 'react'
import { OrbitControls } from '@react-three/drei'
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
      u_colorB: { value: new Color("#E0FFFF") },

   
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
const MMain =function () {
  const [visi,setvisi]=useState(false);
  const[texture, settexture]=useState(null);

   

  

   useEffect(()=>{
    console.log(visi)
    
  var video = document.getElementById('video1');
  

     if(visi==false){
      video.pause();
     }
     else{
      video.play();
     }


   },[visi])
   


  return (

      <div style={{
        display:'flex',
        flexDirection:'row',
        width:'100vw',
        height:'100vh',
        backgroundColor:'black',
        position:'relative'
      }}>
     <div style={{
                width:'100vw',
                    height:'100vh',
                      zIndex:2,
                      position:'absolute',
                    
                      display:'flex',
                      justifyContent:'center',
                    

                  }}> 
                  <div style={{
                     width:'100%',
                     height:'100%',
                     display:'flex',
                     justifyContent:'center',
                     alignItems:'center'
                  }}>
                   <div style={{
 position:'absolute',
 width:'20px',
 height:'20px',
 right:'12.5%',
 top:'25%'


                   }}>
                   
                   </div>



                    <div 
                    
                    onClick={()=>{
         
                      setvisi(()=>!visi) 
                 
                   }}
                    
                    style={{
                      position:'absolute',
                      width:'7%',
                      right:'10%',
                      top:'10%'
                    }}>
                       <img
                    style={{
                      width:'25%',
                      position:'absolute',
                      right:'33%',
                      top:'33%'
                    }}
                    src={play}></img>
                        <img
                        
                        className='img_rotate'
                    
                        src={circle}>
           </img>
                    </div>
         
                

                  

                    <p className='back_name'>DALTILE</p>
                    <div style={{
                      position:'relative',
                      width:'10vw',
                      height:'5vh',
                      
                    }}>

                    
                    <p 
                    className='M_p'> We make color</p>
                   <div className="progress-area">
  <div className="progress"></div>
</div>
</div>
                  </div>
       

         
                    

      </div>



    <div style={{
      width:'60vw',
      height:'70vh',
      position:'absolute',
      zIndex:'2',
      right:'20%',
      top:'10%'
    }}>
           <video 
           style={{ 
               width:'100%',
               height:'100%',
               display:'none',

           }}  id="video1" src="/minute.mp4"> </video>


           {visi&&
           <div style={{
            width:'100%',
            height:'100%',
         
           }}>
           <Canvas camera={{ position: [0, 0, 1] }}>
            <OrbitControls></OrbitControls>
             <Video></Video>
       </Canvas> 
       </div>   
       
       }

    </div>



              <div style={{
                width:'70px',
                height:'10px',
                position:'absolute',
             
               
                zIndex:2,
                top:'10%',
                right:'7%',
            
              }}>
          
                <img
                style={{
                  width:'100%',
                  height:'100%',
            
                }}
                src={Vetor}>
                </img>
              
              </div>
      <div style={{
         width:'100vw',
         height:'100vh',
        position:'realtive',
        backgroundColor:'white',
         zIndex:1
      }}>
         
 
          
<Canvas camera={{ position: [0, 0, 1] }}>

     <Scene2 />

   </Canvas>

     
   
            
    </div>
    
      </div>
   
  )
}
export default MMain;
