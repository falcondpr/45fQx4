import React from 'react'
import dayjs from 'dayjs'
import { Box, Flex, Text } from '@chakra-ui/react'

import { UserAuth } from '../hooks/useAuth'

// eslint-disable-next-line
const ListMessages: React.FC<{ allMessages: any }> = ({ allMessages }) => {
  const { user } = UserAuth()

  // eslint-disable-next-line
  const messagesOrdered = allMessages?.sort(
    // eslint-disable-next-line
    (a: any, b: any) =>
      Number(new Date(b.created_at).getTime()) -
      Number(new Date(a.created_at).getTime()),
  )

  return (
    <Flex
      // bgColor="red"
      position="relative"
      flexDir="column"
      overflowY="auto"
      h="calc(100vh - 60px - 80px)"
      pb="1rem"
    >
      {/* eslint-disable-next-line */}
      {messagesOrdered?.map((message: any) => {
        const is_transmitter =
          message?.id_user_transmitter === user?.id ? true : false

        return (
          <Box key={message?._id} mb="15px">
            <Box
              w="70%"
              py="7px"
              pl="10px"
              position="relative"
              className={`message-${is_transmitter ? 'right' : 'left'}`}
            >
              <Text fontSize="14px">{message?.content}</Text>

              <Text
                fontSize="8px"
                position="absolute"
                bottom="3px"
                right="10px"
              >
                {dayjs(message?.created_at).format('hh:mm a')}
              </Text>
            </Box>
          </Box>
        )
      })}

      <Box
        position="fixed"
        w="full"
        bottom="60px"
        h="3rem"
        zIndex="20"
        // bgColor="#fff"
        bgImage="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,0) 100%)"
      ></Box>
    </Flex>
  )
}

export default ListMessages
