import React, { useEffect } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

interface EmptyProps extends BoxProps {
  children: React.ReactNode
}

const Empty: React.FC<EmptyProps> = ({ children, ...rest }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <Box {...rest}>{children}</Box>
}

export default Empty
