import react, { useRef ,useMemo, useState, useEffect} from 'react'
// Three
import { Color } from 'three'
// Three
import './App.css'


import { Canvas, useFrame } from '@react-three/fiber'
import Rectangle from './assets/Rectangle.svg'
import Fragment_Shader from './Shaders/Fragment_Shader'
import Vertex_shader from './Shaders/Vertex_shader'

import Rectangle2 from './assets/Rectangle2.svg'
import Rectangle3 from './assets/Rectangle3.svg'



function Scene2({data}) {

  const backgroundShaderRef2 = useRef(null)
  if(data){
  backgroundShaderRef2.current.material.uniforms.u_colorB.value= new Color(data)
  
  }
  useFrame(({ clock }) => {
    backgroundShaderRef2.current.material.uniforms.uTime.value = clock.getElapsedTime();
  
  })

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
       <planeGeometry args={[10, 10, 16, 16]} />
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
const About_page= function(){
 const first= useRef(null);
 const second= useRef(null);
 const third= useRef(null);
  var color=null;
  const mouse= useRef(null)
  const mouseimage= useRef(null);
  const [
    mousePosition,
    setMousePosition
  ] = useState({ x: null, y: null });



    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
          
      mouse.current.style.left=mousePosition.x-(window.innerWidth/10)+"px"
      mouse.current.style.top=mousePosition.y-140+"px"
    };
    
  




   const [collor,setcoolr]=useState(null)


  return(
<div 

className='back'>
           <div
           
           style={{
            width:'100vw',
            height:'100vh',
            position:'relative',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            position:'relative',
           }}>


    
            <div style={{
              width:'100%',
              height:'50%', 
            }}>

            <Canvas camera={{ position: [0, 0, 1] }}>
     
             <Scene2 data={collor}  />

            </Canvas>

            </div>
            <div style={{
              width:'80%',
              height:'30%',
        
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
               className='S_p'>ABOUT</p>
             </div>



          

         

            <div
        
         
            style={{
              width:'100%',
              height:'40%',
              marginTop:'5%',
            
              display:'flex'
            }}>
  <div 
    ref={mouse}
  style={{
    width:'30%',
    height:'30%',
    position:'absolute',
     zIndex:1
  }}>
   <img
   ref={mouseimage}
   
   style={{
    width:'100%',
    height:'100%',
   
   }}
   src={Rectangle2}></img>
  </div>



               <div 
                  onMouseMove={updateMousePosition}
               
               className='MM'>
             <div 

             

             ref={first}
             onMouseEnter={()=>{
              setcoolr('#880E4F')
              mouseimage.current.src= Rectangle2
            
            }}
            className='about_div'>
                <p className='M_p'>Defind™ Powered by MICROBAN®</p>
             </div>
               <div
                    ref={second}
                   
               
                    onMouseEnter={()=> {setcoolr('#5C6BC0')
                    mouseimage.current.src= Rectangle3
                  }}
                  className='about_div'>
                 <p className='M_p'>REVOTILE FLOATING FLOOR CLICK TILE</p>
               </div>
               <div
                    ref={second}
                   
               
                    onMouseEnter={(e)=> {setcoolr('#FDD835')
                    mouseimage.current.src= Rectangle
                  
                  }}
                  className='about_div'>
                 <p className='M_p'>REVOTILE FLOATING FLOOR CLICK TILE</p>
               </div>
          
           
              
             
             
                  </div>


            </div>

          
              

           </div>
       </div>
       </div>
  )
}

export default About_page