import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'

interface UserProps {
  onClick?: () => void
  user: {
    name: string
    message: string
    image: string
  }
}

const Chat: React.FC<UserProps> = ({ user, onClick }) => {
  return (
    <Flex onClick={onClick}>
      <Box w="80px" bgColor="gray.200">
        <Image src={user.image} alt={user.name} />
      </Box>
      <Flex flexDir="column" w="full">
        <Box fontSize="14px" p="5px" flex="1" bgColor="gray.300">
          {user.name}
        </Box>
        <Box fontSize="12px" p="5px" flex="1" bgColor="gray.400">
          {user.message}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Chat
