import React from 'react'
import { Input as InputChakraUI, InputProps } from '@chakra-ui/react'

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <InputChakraUI
      border="1px solid"
      borderColor="gray.400"
      rounded="2px"
      fontSize="14px"
      p="10px"
      {...rest}
    />
  )
}

export default Input
