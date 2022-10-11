import React from 'react'
import { Flex, Button, Box } from '@chakra-ui/react'
import { FaHome, FaSearch } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Navigation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Flex
      position="fixed"
      h="50px"
      bgColor="gray.50"
      w="full"
      bottom="0"
      left="0"
      alignItems="center"
      justifyContent="space-between"
      px="32px"
    >
      <Box>
        <Button bgColor="white" onClick={() => navigate('/')}>
          <FaHome />
        </Button>
      </Box>

      <Box>
        <Button bgColor="white" onClick={() => navigate('/search')}>
          <FaSearch />
        </Button>
      </Box>

      <Box>
        <Button bgColor="white" onClick={() => navigate('/settings')}>
          <IoMdSettings />
        </Button>
      </Box>
    </Flex>
  )
}

export default Navigation
