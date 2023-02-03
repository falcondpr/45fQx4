import React from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { UserContext } from '../context/UserContext'
import { LOGIN_USER, REGISTER_USER } from '../utils'

export const AuthLogin = () => {
  const { setUser } = React.useContext(UserContext)
  const navigate = useNavigate()

  // eslint-disable-next-line
  const register = async (data: any) => {
    const response = await REGISTER_USER(data)
    if (!response?.data) throw Error('Ha ocurrido un problema')

    setUser(jwtDecode(response.data))
    localStorage.setItem('SUVAP_TOKEN_AUTH', response.data)
    toast.success('Has iniciado sesion')
    navigate('/')
  }

  // eslint-disable-next-line
  const login = async (data: any) => {
    const response = await LOGIN_USER(data)
    if (!response?.data) throw Error('Ha ocurrido un problema')

    setUser(jwtDecode(response.data))
    localStorage.setItem('SUVAP_TOKEN_AUTH', response.data)
    toast.success('Has iniciado sesion')
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('SUVAP_TOKEN_AUTH')
    toast('Has cerrado sesion', {
      icon: '⚠️',
    })
    navigate('/login')
  }

  return { register, login, logout }
}
