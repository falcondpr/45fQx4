import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '@chakra-ui/react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { FaAngleLeft } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { io } from 'socket.io-client'

import ListMessages from '../components/ListMessages'
import { existTeam } from '../utils/team'
import { UserAuth } from '../hooks/useAuth'
import { getUserByUsername } from '../utils/user'

const socket = io('http://localhost:3333')

const Message: React.FC = () => {
  const navigate = useNavigate()
  const {
    state: { id_team },
  } = useLocation()

  const { username } = useParams()
  const { user } = UserAuth()

  const [message] = useState()
  // eslint-disable-next-line
  const [messages, setMessages] = useState<any>([])

  const { data: userReceiverFetched } = useQuery(
    ['userReceiver', username],
    () => username && getUserByUsername(username as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  const userReceiver = userReceiverFetched?.data
  const { data: teamFetched, isLoading } = useQuery(
    ['getUserReceiver', user?.id, userReceiver?._id],
    () =>
      user?.id &&
      userReceiver?._id &&
      existTeam(user?.id, userReceiver?._id as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  const team = teamFetched?.data

  useEffect(() => {
    // eslint-disable-next-line
    socket.emit('findAllMessages', id_team, (data: any) => {
      setMessages(data)
    })

    socket.on('message', () => {
      // eslint-disable-next-line
      setMessages((p: any) => {
        return [...p, message]
      })
    })

    return () => {
      socket.off('message')
    }
    // eslint-disable-next-line
  }, [messages])

  console.log(messages)

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

          <Box pb="80px">
            <ListMessages allMessages={messages} />
          </Box>
        </Box>
      )}

      <Box
        position="fixed"
        bgColor="gray.100"
        w="full"
        h="60px"
        bottom="0"
        left="0"
      >
        <Grid
          p="10px"
          alignItems="center"
          gap="20px"
          gridTemplateColumns="1fr 50px"
        >
          <Box>
            <Input
              fontSize="14px"
              bgColor="white"
              placeholder="Escribe el mensaje"
            />
          </Box>
          <Box>
            <Button w="full" bgColor="blue.400" color="white" fontSize="20px">
              <IoMdSend />
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Message
