import React, { useMemo } from "react";
import { Toilet } from "./Toilet";
import { useRef,memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF,ScrollControls, } from '@react-three/drei'
import { Toilet_file } from "./Toilet_file";
import { useParams } from "react-router-dom";
const Toilet_scroll= function(){
   var  params =useParams();

   const value= useMemo(()=>{
   
      return Toilet_file(params.productId)
    },[params.productId])


  //Toilet_file(params);
 
 const inputRef = useRef([]);
 const div_ref=useRef(null);

  return (
    < div style={{
      width:'100vw',
      height:'100vh',
      backgroundColor:'black',
      display:'flex',
      //justifyContent:'center',
      alignItems:'center'
    }}>
      
      <div 
       ref={el => (inputRef.current[2] = el)} 
      style={{
        width:'40%',
        height:'90%',
        position:'absolute',
        backgroundColor:'#353535',
        opacity:0.8
,        display:'flex',
        zIndex:2,
        alignItems:'center',
        justifyContent:'center'
        
      }}>
        <div style={{
            width:'80%',
            height:'70%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
          
    
        }}>
          <p  
         ref={el => (inputRef.current[3] = el)} 
          className='PP_p'>POINT 01</p>
         <div style={{
          width:'80%',
          height:'50%',
      
          marginLeft:'2vw',
          display:'flex',
          justifyContent:'flex-end',
          flexDirection:'column',
          
         }}>
          <p 
        
          className="Ma_p">MOSAIC OR </p>
               <p 
        
        className="Ma_p">FULL-SIZED TILE?</p>
          <p  
          style={{
            marginTop:'2vw',

          }}
          className="M_p">Both full -size tile and mosaic are appropriate for the in-shower shelf. Which you choose is a matter of both personal taste and how intricate your niche is. 

</p>
         </div>

        </div>
      </div>


     <div style={{
      width:'80%',
      height:'100%',
      position:'absolute',
      left:'10%'

     }}>



             <div 
           style={{
            position:'absolute',
            bottom:'3%',
            zIndex:2
           }}
           >
             <p 
           ref={el => (inputRef.current[0] = el)} 
             className='S_p'> DALTILE tile</p>
             <p 
           ref={el => (inputRef.current[1] = el)} 
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
             </div>
             </div>
             <div  className="canvas_box">
                  <Canvas>
       <ScrollControls
       className='scrollbar-hide'
       pages={4}>
        {value&&
      <Toilet  
      data={value}
      inputRef={inputRef}
        />
} 
     </ScrollControls>
      </Canvas>
             </div>
 
   
    </div>
 
  )
}

export default Toilet_scroll;