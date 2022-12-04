import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// screens
import Home from '../screens/Home'
import Auth from '../screens/Auth'

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
