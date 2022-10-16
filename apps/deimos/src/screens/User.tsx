import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import Layout from '../Layout'
import { getUserByUsername } from '../utils/user'
import { UserType } from '../interfaces/User'

const User: React.FC = () => {
  const { username } = useParams()

  const { data: userFetched, isSuccess } = useQuery(
    ['getUserByUsername', username],
    () => getUserByUsername(username as string),
  )

  const user: UserType = userFetched?.data

  /*

   * Consultar si ambos usuarios tienen team
   * Si los usuarios no tienen team hay que crear
     - Ir a una vista de mensajes temporal
     - Si realiza el mensaje
       + Crear un team con ambos usuarios
       + Al tener el team realizar la creacion del mensaje
   * Si los usuarios tienen team hay que consultar el chat a traves de los idUser
     - Una vez se tiene el team_id se podra crear el mensaje

   */

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
            {user.name}
          </Text>
          <Text fontSize="12px" color="gray.600" mb="3px">
            {user.username}
          </Text>
          <Text fontSize="12px" color="gray.600">
            {user._id}
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
