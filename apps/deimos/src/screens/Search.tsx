import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

import Layout from '../Layout'
import User from '../components/User'
import Input from '../components/Input'

const Search: React.FC = () => {
  // const

  return (
    <Layout p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Buscar
      </Text>

      <Flex mt="10px" gap="0 15px">
        <Box flex="1">
          <Input />
        </Box>
        <Box>
          <Button>
            <FaSearch />
          </Button>
        </Box>
      </Flex>

      <Box mt="15px">
        <User />
      </Box>
    </Layout>
  )
}

export default Search
