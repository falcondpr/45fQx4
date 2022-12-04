import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

interface HeadingUIProps extends HeadingProps {
  children?: React.ReactNode
}

const HeadingUI: React.FC<HeadingUIProps> = ({ children, ...rest }) => {
  return (
    <Heading
      fontSize={{ base: '2rem' }}
      fontWeight="bold"
      color="primary"
      lineHeight={{ base: '40px' }}
      {...rest}
    >
      {children}
    </Heading>
  )
}

export default HeadingUI
