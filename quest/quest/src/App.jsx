import { useState } from 'react'
import './App.css'
import Home from './Home'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
import Contact from './Contact'


function App() {
  return (

    <>
  
  <nav>
        <Link to ="/"> Home</Link>
        <Link to ="/Dashboard"> Dashboard</Link>
        <Link to ="/About"> About</Link>
        <Link to ="/Contact"> Contact</Link>

  </nav>

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/Dashboard/*" element = {<Dashboard />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Contact" element = {<Contact />} />
      </Routes>


      
    
    </>
    )

}

export default App
