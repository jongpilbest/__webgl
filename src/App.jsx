import react, { useRef ,useMemo} from 'react'
// Three
import { Color } from 'three'
// Three
import './App.css'
import * as THREE from 'three'
import MMain from './MMain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About_page from './About_page'
import Second from './Second'
import Toilet from './Toilet'
import Album from './Album'

import Toilet_scroll from './Toilet_Scroll'
/*

   
     <About_page></About_page>
       
       <Second></Second>
  <Album></Album>
*/



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
         <Second></Second>
       
    } />
      <Route path="/:productId" 
      element={<Toilet_scroll/>} />
      </Routes>
    </BrowserRouter>
  )
}
