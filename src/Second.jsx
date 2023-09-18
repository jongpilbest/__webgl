import React from "react";
import tile from './assets/tile.svg'
import tile2 from './assets/tile2.svg'
import tile6 from './assets/tile_6.svg'
import tile8 from './assets/tile_8.svg'


import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'
import Second_pro from "./Three/Second_pro";
const Second= function(){
  const model = useLoader(GLTFLoader, '/8.gltf');
  const model2 = useLoader(GLTFLoader, '/7.gltf');
  const model3 = useLoader(GLTFLoader, '/4.gltf');
  const model4 = useLoader(GLTFLoader, '/6.gltf');
 const map__=[
 [tile8,model,'01','PERPETUO'],
 [tile,model2,'02','RAINE'],
 [tile2,model3,'03','BRYNE'],
 [tile6,model4,'04','KEYSTONES'],
 ]
return(
< div  style={{
            width:'100vw',
            height:'100vh',
            position:'relative',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            backgroundColor:'black',
            justifyContent:'center'
           
           }}>
            <div style={{
              width:'80%',
              height:'80%',
              display:'flex',
              position:'relative'
              
              
            }}>
              
             <div 
             style={{
              position:'absolute',
              bottom:'3%'
             }}
             >
               <p className='S_p'> DALTILE tile</p>
               <p 
                style={{
                  fontSize:'3vw'
                }}
               className='S_p'>SHOWCASE</p>
             </div>

             


                
          
              
               {
                   model!=false && model2!=false && map__.map((el,index)=>{
                  
                  return   <Second_pro data={el} key={index}></Second_pro>
                   })

               }
            </div>

</div>

)
}
export default Second