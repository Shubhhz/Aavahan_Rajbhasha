import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'

const App = () => {
  return (
   <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/event' element={<Event/>}/>
     </Routes>

   </div>
  )
}

export default App