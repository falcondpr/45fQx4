import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// auth
import Login from '../screens/Login'
import Auth from '../screens/Auth'
import Register from '../screens/Register'

// principal screens
import Home from '../screens/Home'
import Search from '../screens/Search'
import Messages from '../screens/Messages'
import Profile from '../screens/Profile'

// secondary screens
import SavedPost from '../screens/SavedPost'
import PostedPosts from '../screens/PostedPosts'
import PostDetail from '../screens/PostDetail'

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved-post" element={<SavedPost />} />
        <Route path="/posted-posts" element={<PostedPosts />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
