import React from 'react'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { existTeam } from '../utils/team'
import { UserAuth } from '../hooks/useAuth'
import { getUserByUsername } from '../utils/user'
import { getMessages } from '../utils/message'

const Message: React.FC = () => {
  const navigate = useNavigate()
  const { username } = useParams()

  const { user } = UserAuth()

  const { data: userReceiverFetched } = useQuery(
    ['userReceiver'],
    () => username && getUserByUsername(username as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  const userReceiver = userReceiverFetched?.data
  const { data: teamFetched, isLoading } = useQuery(
    ['getUserReceiver'],
    () =>
      user?.id &&
      userReceiver?._id &&
      existTeam(user?.id, userReceiver?._id as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  const team = teamFetched?.data

  const { data: messagesFetched } = useQuery(
    ['getAllMessages'],
    () => team?._id && getMessages(team?._id),
  )

  const allMessages = messagesFetched?.data
  console.log(allMessages)

  return (
    <Box>
      {isLoading ? (
        <Grid w="100vw" h="100vh" placeItems="center">
          <Text>Cargando</Text>
        </Grid>
      ) : !team ? (
        <Grid w="100vw" h="100vh" placeItems="center">
          <Flex flexDir="column" justifyContent="center">
            <Text>Error al cargar los mensajes</Text>
            <Button onClick={() => navigate(`/`)}>Volver a los mensajes</Button>
          </Flex>
        </Grid>
      ) : (
        <Box>
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
        </Box>
      )}
    </Box>
  )
}

export default Message
