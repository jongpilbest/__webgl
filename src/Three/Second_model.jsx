import React, { useRef } from "react";
import { useFrame,extend ,useThree} from "@react-three/fiber"
const Second_model= function({model,val}){


  const ref2= useRef(null);
  console.log(val)
   
  useFrame((state, delta) =>
   {
      
   
      if(val){
       
        ref2.current.rotation.y +=(delta/5);
           

      }
      
  
       //state.camera.lookAt(cameraTarget)
   })


  return(<>
  
  <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 3 } />
    <primitive 
    ref={ref2}
    position={[0,0,2.2]}
    object={model.scene}  />
      </>
    
  )
}
export default Second_model;
