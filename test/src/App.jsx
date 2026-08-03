import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home.jsx'
// import Navebar from './components/Navebar.jsx'

function App() {
  const user = { 
  name: "Rahul Sharma",
  email: "rahul@gmail.com",
  location: "Chandigarh"
};




  return (
    <>
      <Home user={user} />

    </>
  )
}

export default App;