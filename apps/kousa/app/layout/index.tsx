import React from 'react'
import Navigation from '../../router/navigation'

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout
