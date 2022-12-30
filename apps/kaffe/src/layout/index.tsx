import React, { useEffect } from 'react'
import { Box, BoxProps, Button } from '@chakra-ui/react'
import { SlEnergy } from 'react-icons/sl'

import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

interface LayoutProps extends BoxProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Box {...rest} pb="6rem">
        {children}
      </Box>

      <Button
        display="none"
        position="fixed"
        bottom="2.2rem"
        left="50%"
        transform="translateX(-50%)"
        zIndex="20"
        bgColor="primary"
        fontSize="1.5rem"
        minW="initial"
        w="3.2rem"
        h="3.2rem"
        p="0.5rem"
        rounded="full"
        color="white"
      >
        <SlEnergy />
      </Button>

      <Navbar />
    </>
  )
}

export default Layout
