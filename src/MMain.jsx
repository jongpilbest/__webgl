import react, { useEffect, useRef,useState } from 'react'
// Three
import './App.css'
import * as THREE from 'three'
// R3F and Drei
import { Canvas, useFrame } from '@react-three/fiber'

// Shaders
import play from './assets/play.svg'
import Vetor from './assets/Vector.svg'
import circle from './assets/rotate.svg'


import Scene2 from './Background_Three'
import Video from './Video'
import { useMemo } from 'react'
import { OrbitControls } from '@react-three/drei'

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
              



         
                

                  

                    <p className='back_name'>WE MAKE</p>
                    <p
                    style={{
                      fontWeight:'bold'
                    }}
                    className='back_name'>COLOR</p>
                
                <div 
                    
                    onClick={()=>{
         
                      setvisi(()=>!visi) 
                 
                   }}
                    
                    style={{
                       width:'6vw',
                       marginBottom:'1vw',
                       display:'flex',
                       marginLeft:'1vw',
                      position:'relative'
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
           <Canvas camera={{ position: [0, 0, 0.5] }}>
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
