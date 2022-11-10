import toast from 'react-hot-toast'
import jwt from 'jwt-decode'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import { loginUser } from '../utils/user'

export const UserAuth = () => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  // eslint-disable-next-line
  const login = async (data: any) => {
    const response = await loginUser(data)

    if (!response) return null

    setUser(jwt(response.data))
    localStorage.setItem('SUV_TOKEN_AUTH', response.data)
    toast.success('Sesion iniciada')
    return response
  }

  const logout = () => {
    setUser(null)
    localStorage.setItem('SUV_TOKEN_AUTH', '')
    toast.success('Sesion cerrada')
    navigate('/login')
  }

  return { user, login, logout }
}
