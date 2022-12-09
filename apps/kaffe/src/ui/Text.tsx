import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'

interface TextUIProps extends TextProps {
  children?: React.ReactNode
}

const TextUI: React.FC<TextUIProps> = ({ children, ...rest }) => {
  return (
    <Text color="light-gray" {...rest}>
      {children}
    </Text>
  )
}

export default TextUI
