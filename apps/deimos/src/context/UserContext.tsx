import { createContext, useEffect, useState } from 'react'
import jwt from 'jwt-decode'

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<any>(null)

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('SUV_TOKEN_AUTH')

    if (!token) {
      setUser(null)
    } else {
      setUser(jwt(token))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
