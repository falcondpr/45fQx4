import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'

import { getUser } from '../utils/user'
import { getMessages } from '../utils/message'
import { existTeam } from '../utils/team'
import { UserAuth } from '../hooks/useAuth'

interface UserProps {
  // eslint-disable-next-line
  user: any
  // eslint-disable-next-line
  team: any
}

interface ContentMessageChatProps {
  // eslint-disable-next-line
  allMessages: any
}

const ContentMessageChat: React.FC<ContentMessageChatProps> = ({
  allMessages,
}) => {
  const { user } = UserAuth()

  const lastMessage = allMessages[allMessages?.length - 1]
  const id_user_transmitter =
    allMessages[allMessages?.length - 1]?.id_user_transmitter

  return (
    <Flex justifyContent="space-between" alignItems="center" flex="1">
      <Flex>
        <Flex alignItems="center">
          <Text fontWeight="bold" fontSize="16px" mr="2px" color="#555">
            {user?.id === id_user_transmitter && <IoCheckmarkDoneSharp />}
          </Text>
          <Text>{lastMessage?.content}</Text>
        </Flex>
      </Flex>

      <Box fontSize="10px">
        {allMessages && dayjs(allMessages[0]?.created_at).format('hh:mm a')}
      </Box>
    </Flex>
  )
}

const Chat: React.FC<UserProps> = ({ team, user }) => {
  const navigate = useNavigate()
  const [idUserReceiver, setIdUserReceiver] = useState<string | null>(null)

  const fnUserIdReceiver = (arrayId: string[]) => {
    if (!arrayId) return

    return (
      user?.id &&
      arrayId?.length > 0 &&
      arrayId?.filter((id: string) => id !== user?.id)[0]
    )
  }

  useEffect(() => {
    const id_user_receiver = fnUserIdReceiver(team?.members)
    setIdUserReceiver(id_user_receiver)
    // eslint-disable-next-line
  }, [team?.members])

  const { data: userReceiverInfoFetched } = useQuery(
    ['getUser', idUserReceiver],
    () => idUserReceiver && getUser(idUserReceiver),
    {
      refetchOnWindowFocus: false,
    },
  )

  const infoUserReceiver = userReceiverInfoFetched?.data

  const { data: teamInfoFetched } = useQuery(
    ['getTeam', idUserReceiver, user?.id],
    () => idUserReceiver && user?.id && existTeam(idUserReceiver, user.id),
    {
      refetchOnWindowFocus: false,
    },
  )
  const teamInfo = teamInfoFetched?.data

  const { data: allMessagesChatFetched } = useQuery(
    ['getMessages', teamInfo?._id],
    () => teamInfo && getMessages(teamInfo._id),
    {
      refetchOnWindowFocus: false,
    },
  )

  const allMessages = allMessagesChatFetched?.data

  return (
    <Flex
      onClick={() =>
        navigate(`/message/${infoUserReceiver?.username}`, {
          state: {
            id_team: teamInfo?._id,
            id_user_transmitter: user?.id,
            id_user_receiver: infoUserReceiver?._id,
          },
        })
      }
    >
      <Box w="80px" bgColor="gray.200">
        <Image
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          alt={user.name}
          w="full"
          objectFit="cover"
        />
      </Box>
      <Flex flexDir="column" w="full">
        <Box
          fontWeight="bold"
          fontSize="14px"
          textTransform="uppercase"
          color="#333"
          p="5px 10px"
          flex="1"
          bgColor="gray.300"
        >
          {infoUserReceiver?.name}
        </Box>
        <Flex fontSize="12px" p="5px 10px" flex="1" bgColor="gray.400">
          {allMessages && <ContentMessageChat allMessages={allMessages} />}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Chat
