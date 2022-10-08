import React from 'react'
import { Input as InputChakraUI, InputProps } from '@chakra-ui/react'

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <InputChakraUI {...rest} border="1px solid gray.600" p="10px" />
}

export default Input
