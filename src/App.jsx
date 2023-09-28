import react, { useRef ,useMemo} from 'react'
// Three
import { Color } from 'three'
// Three
import './App.css'
import * as THREE from 'three'
import MMain from './MMain'


import About_page from './About_page'
import Second from './Second'
import Toilet from './Toilet'


import Toilet_scroll from './Toilet_Scroll'
/*

   <MMain></MMain>
     <About_page></About_page>
       
       <Second></Second>

*/



export default function App() {
  return (
    <div className="App">
  
      <Toilet_scroll></Toilet_scroll>


    </div>
  )
}
