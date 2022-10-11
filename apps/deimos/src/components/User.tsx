import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface UserProps {
  name: string
  username: string
  id: string
  onClick: () => void
}

const User: React.FC<UserProps> = ({ name, username, id, onClick }) => {
  return (
    <Box onClick={onClick} bgColor="gray.200" rounded="3px" p="12px">
      <Text fontSize="14px" fontWeight="bold" color="gray.600" mb="5px">
        {name}
      </Text>
      <Text fontSize="12px" color="gray.600" mb="5px">
        {username}
      </Text>
      <Text fontSize="12px" color="gray.600">
        {id}
      </Text>
    </Box>
  )
}

export default User
