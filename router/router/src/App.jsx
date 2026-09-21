import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
// import Login from './Login'
import Profile from './Profile'
import UserContext from './UserContext'

function App() {
  const student = {
  name: "Priya Nair",
  email: "priya@gmail.com",
  year: "3rd Year",
};

  return (
    <>

    <UserContext.Provider value={student}>
      
      <Link to = "/">Home</Link>
      <Link to = "/About">About</Link>
      {/* <Link to = "/Login">Login</Link> */}
      <Link to = "/Profile">Profile</Link>

      <h2>Welcome</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path = "/Login" element = {<Login/>}/> */}
        <Route path = "/Profile" element = {<Profile/>}/>
      </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App