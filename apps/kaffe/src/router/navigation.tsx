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

// Profile
import Email from '../screens/Profile/Email'
import Username from '../screens/Profile/Username'
import Password from '../screens/Profile/Password'
import Message from '../screens/Message'
import Ticket from '../screens/Tickets'

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Principal Tab */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />

        {/* Profile */}
        <Route path="/saved-post" element={<SavedPost />} />
        <Route path="/posted-posts" element={<PostedPosts />} />
        <Route path="/post/:id" element={<PostDetail />} />

        {/* Edit Profile */}
        <Route path="/profile/email" element={<Email />} />
        <Route path="/profile/username" element={<Username />} />
        <Route path="/profile/password" element={<Password />} />

        {/* Message */}
        <Route path="/message" element={<Message />} />

        {/* Tickets */}
        <Route path="/tickets" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
