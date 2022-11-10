import React, { useRef } from 'react'
import dayjs from 'dayjs'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useDataLoader, useChatScroll } from 'use-chat-scroll'

import { UserAuth } from '../hooks/useAuth'

const loadAdditionalData = () => [
  /* Additional data */
]

// eslint-disable-next-line
const ListMessages: React.FC<{ allMessages: any }> = ({ allMessages }) => {
  const { user } = UserAuth()

  const containerRef = useRef<HTMLDivElement>(null)
  const loader = useDataLoader(loadAdditionalData, allMessages, () =>
    console.log('hello'),
  )

  // eslint-disable-next-line
  useChatScroll(containerRef as any, allMessages, loader)

  return (
    <Flex
      flexDir="column"
      bgColor="red"
      overflowY="auto"
      h="calc(100vh - 60px - 80px)"
      ref={containerRef}
    >
      {/* eslint-disable-next-line */}
      {allMessages?.map((message: any) => {
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
    </Flex>
  )
}

export default ListMessages
