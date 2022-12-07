import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// screens
import Home from '../screens/Home'
import Auth from '../screens/Auth'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Search from '../screens/Search'

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
