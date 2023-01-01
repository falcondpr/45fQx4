import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, BoxProps, Button } from '@chakra-ui/react'
import { SlEnergy } from 'react-icons/sl'

import Navbar from '../components/Navbar'
import { openMenu } from '../features/menuSlice'

interface LayoutProps extends BoxProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  const { pathname } = useLocation()

  const dispatch = useDispatch()

  const show = useSelector(
    (state: { menu: { show: boolean } }) => state.menu.show,
  )

  const handleOpenMenu = () => {
    dispatch(openMenu())
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Box {...rest} pb="6rem">
        {children}
      </Box>

      <Button
        display={show ? 'none' : 'flex'}
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
        onClick={handleOpenMenu}
      >
        <SlEnergy />
      </Button>

      <Navbar />
    </>
  )
}

export default Layout
