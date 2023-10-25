import react, { useRef ,useMemo, useState, useEffect} from 'react'
// Three
import { Color } from 'three'
// Three
import './App.css'
import arrow from './assets/arrow.svg'

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

  const check_ref=useRef([]);


     const[check,setcheck]=useState(0);

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
          
            flexDirection:'row',
            position:'relative',
          
            justifyContent:'flex-end'
           }}>


    
       

            <Canvas camera={{ position: [0, 0, 2] }}>
     
             <Scene2 data={collor}  />

            </Canvas>
           <div className='first_about_page'>
           <div 
           
           style={{
            position:'absolute',
            bottom:'3%',
            left:'10%'
           }}
           >
             <p className='S_p'> DALTILE tile</p>
             <p 
              style={{
                fontSize:'3vw'
              }}
             className='S_p'>ABOUT</p>
           </div>
           <div style={{
              width:'80%',
              height:'30%',
             
            }}>

           

        


          

         

            <div
        
         
            style={{
              width:'100%',
              height:'40%',
              marginTop:'10%',
              
              marginLeft:'10%',
              display:'flex'
            }}>




               <div 
              
               
               className='MM'>
             <div 
             ref={first}
             onMouseLeave={()=>{
              check_ref.current[0].style.visibility='hidden'
            }}
             onMouseEnter={()=>{
              setcoolr('#D7FFFE');
              check_ref.current[0].style.visibility='visible'
              mouseimage.current.src= Rectangle2
            }}
            className='about_div'>
                <p className='M_p'>Defind™ Powered by MICROBAN®</p>
                
                <div className='arrow_div'>
                <img 
                 ref={ (el) => (check_ref.current[0] = el) }
                className='main_scroll'
                style={{ width:'40%', height:'100%'}}
                src={arrow}></img>
                 
                </div>


             </div>
               <div
                    ref={second}
                    onMouseLeave={()=>{
                      check_ref.current[1].style.visibility='hidden'
                    }}
                    onMouseEnter={()=> {setcoolr('#e6dee9')
                    mouseimage.current.src= Rectangle3
                    check_ref.current[1].style.visibility='visible'
                  }}
                  className='about_div'>
                 <p className='M_p'>REVOTILE FLOATING FLOOR CLICK TILE</p>
                 <div className='arrow_div'>
                <img 
                 ref={ (el) => (check_ref.current[1] = el) }
                className='main_scroll'
                style={{ width:'40%', height:'100%'}}
                src={arrow}></img>
                 
                </div>
               </div>
               <div
                    ref={second}
                    onMouseLeave={()=>{
                      check_ref.current[2].style.visibility='hidden'
                    }}
                    onMouseEnter={(e)=> {setcoolr('#deecdd')
                    mouseimage.current.src= Rectangle
                    check_ref.current[2].style.visibility='visible'
                  }}
                  className='about_div'>
                 <p className='M_p'>REVOTILE FLOATING FLOOR CLICK TILE</p>
                 <div className='arrow_div'>
                <img 
                      ref={ (el) => (check_ref.current[2] = el) }
                className='main_scroll'
                style={{ width:'40%', height:'100%'}}
                src={arrow}></img>
                 
                </div>
               </div>
          
           
              
             
             
                  </div>


            </div>

            </div>
              

           </div>


           
          
           

         

   
       </div>
       </div>
  )
}

export default About_page