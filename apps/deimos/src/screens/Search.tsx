import React, { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import Layout from '../Layout'
import User from '../components/User'
import Input from '../components/Input'
import { getUserByUsername } from '../utils/user'

const Search: React.FC = () => {
  const [inputUsername, setInputUsername] = useState<string>('')

  const { data } = useQuery(
    ['getUserByUsername', inputUsername],
    () => inputUsername.length > 1 && getUserByUsername(inputUsername.trim()),
  )

  return (
    <Layout p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Buscar
      </Text>

      <Flex mt="10px" gap="0 15px">
        <Box flex="1">
          <Input
            placeholder="Buscar por username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </Box>
      </Flex>

      <Box mt="15px">
        {!data?.data ? (
          <Box>
            <Text>Usuario no encontrado</Text>
          </Box>
        ) : (
          <User
            name={data?.data.name}
            username={data?.data.username}
            id={data?.data._id}
          />
        )}
      </Box>
    </Layout>
  )
}

export default Search
