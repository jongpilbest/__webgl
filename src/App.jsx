import react, { useRef ,useMemo} from 'react'
// Three
import { Color } from 'three'
// Three
import './App.css'
import * as THREE from 'three'
import MMain from './MMain'


import About_page from './About_page'
import Second from './Second'



/*
function Scene2() {
  const backgroundShaderRef2 = useRef()
 

  useFrame(({ clock }) => {
    backgroundShaderRef2.current.uTime = clock.getElapsedTime();
  })

  return (
  
   


      <mesh position={[0, 0, 0]}>
        <sphereGeometry  attach="geometry" args={[3, 32, 32]} />
        <rightgrondShader attach="material" side={THREE.BackSide} ref={backgroundShaderRef2} />
      </mesh>
    
  )
}
*/



export default function App() {
  return (
    <div className="App">
     <MMain></MMain>
     <About_page></About_page>
       
       <Second></Second>


    </div>
  )
}
