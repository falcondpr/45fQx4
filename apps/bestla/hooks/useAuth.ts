import { useContext } from 'react'
import toast from 'react-hot-toast'
import jwt from 'jwt-decode'

import { UserContext } from '../context/UserContext'
import { loginUser } from '../utils/user'

export const UserAuth = () => {
  const { user, setUser } = useContext(UserContext)

  const login = async (data: any) => {
    const response = await loginUser(data)
    console.log(response)

    if (!response.success) {
      return toast.error('Ocurrió un error al iniciar sesión')
    }

    setUser(jwt(response.data))
    localStorage.setItem('BESTLA_TOKEN_AUTH', response.data)
    return response
  }

  const logout = () => {
    setUser(null)
    localStorage.setItem('BESTLA_TOKEN_AUTH', '')
  }

  return { user, login, logout }
}
