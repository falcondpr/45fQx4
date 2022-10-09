import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Message: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box p="20px">
      <Flex alignItems="center" columnGap="15px">
        <Button
          bgColor="white"
          border="1px solid"
          borderColor="gray.300"
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft />
        </Button>
        <Text fontSize="24px" fontWeight="bold">
          Message
        </Text>
      </Flex>
    </Box>
  )
}

export default Message
