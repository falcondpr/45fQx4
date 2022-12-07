import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { MdLocalGroceryStore } from 'react-icons/md'
import { HiSearch, HiOutlineUserCircle } from 'react-icons/hi'
import { TbMessageDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <Box
      position="fixed"
      p={{ base: '0 2rem' }}
      h={{ base: '60px' }}
      bgColor="white"
      w="full"
      left={{ base: '0' }}
      bottom={{ base: '0' }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Text fontSize={{ base: '2rem' }} color="primary">
          <MdLocalGroceryStore />
        </Text>
      </Link>

      <Link to="/">
        <Text fontSize={{ base: '2rem' }} color="border-color">
          <HiSearch />
        </Text>
      </Link>

      <Link to="/">
        <Text fontSize={{ base: '2rem' }} color="border-color">
          <TbMessageDots />
        </Text>
      </Link>

      <Link to="/">
        <Text fontSize={{ base: '2rem' }} color="border-color">
          <HiOutlineUserCircle />
        </Text>
      </Link>
    </Box>
  )
}

export default Navbar
