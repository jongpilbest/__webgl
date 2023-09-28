import React from "react";
import Toilet from "./Toilet";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF, SoftShadows, ScrollControls, useScroll, useTexture } from '@react-three/drei'
const Toilet_scroll= function(){

  return (
    < div style={{
      width:'100vw',
      height:'100vh',
      backgroundColor:'black',
      display:'flex',
      justifyContent:'center'
    }}>
      
     <div style={{
      width:'80%',
      height:'100%',
      position:'absolute'
     }}>
             <div 
           style={{
            position:'absolute',
            bottom:'3%',
            zIndex:2
           }}
           >
             <p className='S_p'> DALTILE tile</p>
             <p 
              style={{
                fontSize:'3vw'
              }}
             className='S_p'>SHOWCASE</p>
           </div>
           <div style={{
            width:'100%',
            height:'100%',
       
            display:'flex',
            zIndex:1
           }}>

            <div style={{
              width:'20%',
              height:'30px',
              right:'0%',
              position:'absolute',
              top:'5%',
              display:'flex',
              alignItems:'flex-end',
              justifyContent:'flex-end'


            }}>
              <p 
              
              style={{
                marginRight:'20px',
                fontWeight:'bold'
              }}
              className='S_p'> 01 </p>
              <p className='S_p'> 
              Ceramic Tiles
              </p>

            </div>
             <div  style={{
              width:'2%',
              height:'20%',
              right:'0%',
              position:'absolute',
              bottom:'5%',
              display:'flex',
              alignItems:'flex-end',
              justifyContent:'flex-end',
              flexDirection:'column',
              zIndex:2,
              alignItems:'center'

            }}> 
            <div className="Div_circle"></div>
            <div className="Div_circle"></div>
              <p 
           
           className='Scroll_p' >SCROLL</p>
             </div>

             </div>
  
             </div>
    <Canvas>
       <ScrollControls pages={4}>
      <Toilet />
     </ScrollControls>
      </Canvas> 
   
    </div>
 
  )
}

export default Toilet_scroll