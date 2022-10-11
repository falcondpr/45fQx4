import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import Layout from '../Layout'
import { getUserByUsername } from '../utils/user'

const User: React.FC = () => {
  const { username } = useParams()

  const { data, isSuccess } = useQuery(['getUserByUsername', username], () =>
    getUserByUsername(username as string),
  )

  return (
    <Layout p="20px">
      <Text fontSize="24px" fontWeight="bold">
        User profile
      </Text>

      {isSuccess && (
        <Box pt="10px" mt="5px" borderTop="1px solid #dedede">
          <Text
            fontSize="14px"
            fontWeight="bold"
            textTransform="uppercase"
            mb="3px"
          >
            {data.data.name}
          </Text>
          <Text fontSize="12px" color="gray.600" mb="3px">
            {data.data.username}
          </Text>
          <Text fontSize="12px" color="gray.600">
            {data.data._id}
          </Text>

          <Button
            fontWeight="normal"
            rounded="3px"
            mt="10px"
            fontSize="12px"
            px="12px"
          >
            Enviar un mensaje
          </Button>
        </Box>
      )}
    </Layout>
  )
}

export default User
