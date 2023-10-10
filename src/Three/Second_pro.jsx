

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import black from '../assets/black.svg'
import Second_model from "./Second_model";
const Second_pro= function({data,index}){
  const ref= useRef(null);
  
 
  const [play,setplay]=useState(false);
  const navigate = useNavigate();

 const handleMouseOver= function(){
  ref.current.style.backgroundImage=`url(${data[0]})`
  setplay(true)
 }

 const handleMouseOut= function(){
  ref.current.style.backgroundImage=`url(${black})`
  setplay(false)
 }


  return(
    <div 
    ref={ref}
    onClick={()=>navigate(`/${index}`)}
    onMouseEnter={handleMouseOver}
    onMouseLeave={handleMouseOut}
    
    style={{
      width:'25%',
      height:'100%',
 
     
      backgroundSize:'cover',
      display:'flex',
      flexDirection:'column'
      

  
    }}>
      <div style={{
        width:'80%',
        height:'30%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        paddingLeft:'10%',
   
     
   
      }}> 
      <p className="SS_p">{data[2]}</p>
      <p className="SSS_p">{data[3]}</p>

      </div>
     <div style={{
         width:'80%',
         height:'70%',
         paddingLeft:'10%',
     
        
      }}>
        <div style={{
          width:'100%',
          height:'70%',
          marginTop:'0%',
        }}>
          <Canvas>

          <Second_model  val={play}  model={data[1]}></Second_model>

          </Canvas>

        

        </div>
      

      </div>
      <div>
      
      </div>
    </div>
  )
}

export default Second_pro