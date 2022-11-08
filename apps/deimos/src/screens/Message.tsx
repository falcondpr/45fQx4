import React, { useEffect, useRef, useState } from 'react'
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
  // eslint-disable-next-line
  const dummy: any = useRef()
  const navigate = useNavigate()
  const {
    state: { id_team, id_user_receiver, id_user_transmitter },
  } = useLocation()

  const { username } = useParams()
  const { user } = UserAuth()

  const [message, setMessage] = useState({
    id_team,
    id_user_receiver,
    id_user_transmitter,
    content: '',
  })
  // eslint-disable-next-line
  const [messages, setMessages] = useState<any>([])

  const { data: userReceiverFetched } = useQuery(
    ['userReceiver', username],
    () => username && getUserByUsername(username as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  useEffect(() => {
    return () => {
      // dummy.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

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
      // setStateVariable(false)
    }
    // eslint-disable-next-line
  }, [messages])

  // eslint-disable-next-line
  const handleSubmitMessage = (e: any) => {
    e.preventDefault()

    const data_message = {
      ...message,
    }

    socket.emit('createMessage', data_message)
    setMessage({ ...message, content: '' })

    dummy.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  return (
    <>
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
        <>
          <Box p="20px" bgColor="white" zIndex="20">
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
                {userReceiver?.name}
              </Text>
            </Flex>
          </Box>

          <Flex flexDir="column" bgColor="purple">
            <ListMessages dummy={dummy} allMessages={messages} />
            <span ref={dummy}></span>
          </Flex>
        </>
      )}

      <Box bgColor="gray.100" w="full" h="60px">
        <Grid
          as="form"
          onSubmit={handleSubmitMessage}
          p="10px"
          alignItems="center"
          gap="20px"
          gridTemplateColumns="1fr 50px"
        >
          <Box>
            <Input
              value={message.content}
              onChange={(e) =>
                setMessage({ ...message, content: e.target.value })
              }
              fontSize="14px"
              bgColor="white"
              placeholder="Escribe el mensaje"
            />
          </Box>
          <Box>
            <Button
              disabled={
                !message.content || message.content.trim() === '' ? true : false
              }
              type="submit"
              w="full"
              bgColor="blue.400"
              color="white"
              fontSize="20px"
            >
              <IoMdSend />
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Message
