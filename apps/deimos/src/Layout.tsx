import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import Navigation from './components/Navigation'

interface LayoutProps extends BoxProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  return (
    <Box {...rest}>
      {children}
      <Navigation />
    </Box>
  )
}

export default Layout
