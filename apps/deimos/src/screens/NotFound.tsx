import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box h="100vh" bgColor="red.400" p="32px">
      <Text fontSize="32px" color="white">
        NotFound
      </Text>

      <Button onClick={() => navigate('/')}>Go to home</Button>
    </Box>
  )
}

export default NotFound
