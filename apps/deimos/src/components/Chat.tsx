import React, { useEffect, useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../utils/user'
import { getMessages } from '../utils/message'
import { existTeam } from '../utils/team'

interface UserProps {
  onClick?: () => void
  // eslint-disable-next-line
  user: any
  // eslint-disable-next-line
  team: any
}

const Chat: React.FC<UserProps> = ({ team, user, onClick }) => {
  const [idUserReceiver, setIdUserReceiver] = useState<string | null>(null)

  const fnUserIdReceiver = (arrayId: string[]) => {
    // console.log(arrayId?.filter((id: string) => id !== user?.id)[0])
    return (
      user?.id &&
      arrayId.length > 0 &&
      arrayId?.filter((id: string) => id !== user?.id)[0]
    )
  }

  useEffect(() => {
    const id_user_receiver = fnUserIdReceiver(team?.members)
    setIdUserReceiver(id_user_receiver)
    // eslint-disable-next-line
  }, [team])

  const { data: userReceiverInfoFetched } = useQuery(
    ['getUser'],
    () => idUserReceiver && getUser(idUserReceiver),
    {
      refetchOnWindowFocus: false,
    },
  )
  const infoUserReceiver = userReceiverInfoFetched?.data

  const { data: teamInfoFetched } = useQuery(
    ['getTeam'],
    () => idUserReceiver && user?.id && existTeam(idUserReceiver, user?.id),
    {
      refetchOnWindowFocus: false,
    },
  )
  const teamInfo = teamInfoFetched?.data

  const { data: allMessagesChatFetched } = useQuery(
    ['getMessages'],
    () => teamInfo?._id && getMessages(teamInfo?._id),
    {
      refetchOnWindowFocus: false,
    },
  )

  const allMessages = allMessagesChatFetched?.data
  // console.log(allMessages)
  console.log(infoUserReceiver)

  return (
    <Flex onClick={onClick}>
      <Box w="80px" bgColor="gray.200">
        {/* <Image src={user.image} alt={user.name} /> */}
      </Box>
      <Flex flexDir="column" w="full">
        <Box fontSize="14px" p="5px" flex="1" bgColor="gray.300">
          {infoUserReceiver?.name}
        </Box>
        <Box fontSize="12px" p="5px" flex="1" bgColor="gray.400">
          {/* {user.message} */}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Chat
