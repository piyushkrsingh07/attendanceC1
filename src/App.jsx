import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

import {Route,Routes} from "react-router-dom"

function App() {

  const[IsLoggedIn,setIsLoggedIn]=useState(false);


  return (
    <>
    <div>
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />


      </Routes>

    </div>
    </>
  )
}

export default App
