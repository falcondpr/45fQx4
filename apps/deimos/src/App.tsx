import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'
import Message from './screens/Message'
import NotFound from './screens/NotFound'
import Register from './screens/Register'
import Settings from './screens/Settings'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
