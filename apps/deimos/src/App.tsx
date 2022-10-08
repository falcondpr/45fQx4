import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './screens/Home'
import Message from './screens/Message'
import NotFound from './screens/NotFound'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
