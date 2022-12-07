import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

import Navbar from '../components/Navbar'

interface LayoutProps extends BoxProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box pb="3.75rem">{children}</Box>
      <Navbar />
    </>
  )
}

export default Layout
