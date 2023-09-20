import React from 'react'
import Home from './home'
import { Routes,Route,useLocation} from 'react-router-dom'
import Cuisine from './cuisine'
import Searched from './searched';
import Recipes from './Recipes';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation()
  return (
    <div>
    <AnimatePresence mode='wait'>
     <Routes location={location} key={location.pathname}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/cuisine/:type' element = {<Cuisine/>}/>
      <Route path='/searched/:search' element={<Searched />}/>
      <Route path='/recipe/:name' element={<Recipes/>}/>
     </Routes>
     </AnimatePresence>
    </div>
  )
}

export default Pages