import React from 'react'
import jwtDecode from 'jwt-decode'

import { UserContext } from '../context/UserContext'
import { REGISTER_USER } from '../utils/user'

export const AuthLogin = () => {
  const { setUser } = React.useContext(UserContext)

  // eslint-disable-next-line
  const login = async (data: any) => {
    const response = await REGISTER_USER(data)
    if (!response?.data) throw Error('Ha ocurrido un problema')

    if (response?.data) {
      setUser(jwtDecode(response.data))
      localStorage.setItem('SUVAP_TOKEN_AUTH', response.data)
    }
  }

  return { login }
}
