import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

interface ButtonUIProps extends ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export const ButtonUI: React.FC<ButtonUIProps> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button
      w="full"
      minW="initial"
      onClick={onClick}
      bgColor="primary"
      color="white"
      fontSize={{ base: '1.05rem' }}
      py="14px"
      h="auto"
      border="2px solid transparent"
      rounded="2px"
      fontWeight="medium"
      _focus={{
        bgColor: 'white',
        border: '2px solid',
        borderColor: 'primary',
        color: 'primary',
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
