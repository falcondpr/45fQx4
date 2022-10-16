import React, { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import Layout from '../Layout'
import User from '../components/User'
import Input from '../components/Input'
import { getUserByName } from '../utils/user'

const Search: React.FC = () => {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState<string>('')

  const { data: usersFetched } = useQuery(
    ['getUserByName', inputUsername],
    () => inputUsername.length > 1 && getUserByName(inputUsername.trim()),
  )
  const users = usersFetched?.data

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
        {!users ? (
          <Box>
            <Text>Usuario no encontrado</Text>
          </Box>
        ) : (
          users.map((user: any) => (
            <User
              onClick={() => navigate(`/user/${user?.username}`)}
              name={user?.name}
              username={user?.username}
              id={user?._id}
            />
          ))
        )}
      </Box>
    </Layout>
  )
}

export default Search
