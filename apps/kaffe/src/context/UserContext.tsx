import React from 'react'
import jwt from 'jwt-decode'

interface UserProviderProps {
  children: React.ReactNode
}

// eslint-disable-next-line
export const UserContext = React.createContext<any>(null)

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const token = localStorage.getItem('SUVAP_TOKEN_AUTH')

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
