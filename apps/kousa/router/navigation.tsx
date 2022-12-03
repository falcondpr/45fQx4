import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Register from '../app/routes/register'

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
