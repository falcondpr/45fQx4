import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './screens/Home'
import Login from './screens/Login'
import Message from './screens/Message'
import NotFound from './screens/NotFound'
import Register from './screens/Register'
import Settings from './screens/Settings'
import Search from './screens/Search'
import User from './screens/User'
import { UserProvider } from './context/UserContext'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<Message />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
