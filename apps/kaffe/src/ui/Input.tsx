import React from 'react'
import { Text, Box, Input, InputProps } from '@chakra-ui/react'

interface InputUIProps extends InputProps {
  title?: string
}

const InputUI: React.FC<InputUIProps> = ({ title, ...rest }) => {
  return (
    <Box mb="20px" w="full">
      <Text
        htmlFor={title}
        display="block"
        mb="5px"
        fontSize={{ base: '0.85rem' }}
        color="light-gray"
        as="label"
      >
        {title}
      </Text>
      <Input id={title} borderColor="border-color" h="50px" {...rest} />
    </Box>
  )
}

export default InputUI
