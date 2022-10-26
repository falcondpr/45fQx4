import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { getUser } from '../utils/user'
import { getMessages } from '../utils/message'
import { existTeam } from '../utils/team'

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
  const id_user_transmitter = allMessages && allMessages[0]?.id_user_transmitter

  const { data: userTransmisserFetched, isLoading } = useQuery(
    ['userTransmisser', id_user_transmitter],
    () => id_user_transmitter && getUser(id_user_transmitter),
  )

  const userTransmisser = userTransmisserFetched?.data

  return (
    <Flex justifyContent="space-between" alignItems="center" flex="1">
      <Flex>
        <Box>
          {isLoading ? (
            <Box w="60px" h="20px" bgColor="gray.300"></Box>
          ) : (
            <Text as="span" fontWeight="bold">
              {userTransmisser?.name}
            </Text>
          )}
          : {allMessages && allMessages[0]?.content}{' '}
        </Box>
      </Flex>

      <Box fontSize="10px">
        {allMessages && dayjs(allMessages[0]?.created_at).format('DD/MM HH:MM')}
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
    <Flex onClick={() => navigate(`/message/${infoUserReceiver?.username}`)}>
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
          <ContentMessageChat allMessages={allMessages} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Chat
