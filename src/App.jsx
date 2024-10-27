import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Room from './Room.jsx'
import { v4 as uuidv4 } from 'uuid';

function App() {

  function Home() {
    const navigate = useNavigate()

    useEffect(() => {
      const id = uuidv4()
      navigate(`/${id}`)
    }, [navigate])
    
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:roomID" element={<Room/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
