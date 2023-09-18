
import './App.css'
import * as THREE from 'three'
// R3F and Drei
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'
import {  useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
const Video= function(){
  var video = document.getElementById('video1');
const texture=(new THREE.VideoTexture(video));
const meshRef= useRef(null);
const [ccount,sscount]=useState(null);

useEffect(()=>{
sscount(meshRef.current);

},[])
useFrame(({clock}) =>
{  /*
  const time = clock.getElapsedTime()
  
  if(ccount){
   var count= ccount.attributes.position.count;
  
 for(let i=0; i<count; i++){
  const x= ccount.attributes.position.getX(i);
   
  const y= ccount.attributes.position.getY(i);
const animl= 0.25*Math.sin(x*time*0.7);

ccount.attributes.position.setZ(i,animl);

ccount.computeVertexNormals();
ccount.attributes.position.needsUpdate=true;
console.log(ccount.attributes.position)
*/



}

  
)

  return(
      <mesh position={[0,0,-0.3]}>
     
       <planeGeometry
       ref={meshRef}
       attach="geometry"  args={[3,2,2]} />
       <meshBasicMaterial
       
       
       map={texture} />
       </mesh>

  )
}

export default Video;

