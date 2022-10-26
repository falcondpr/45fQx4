import React from 'react'
import dayjs from 'dayjs'
import { Box, Text } from '@chakra-ui/react'

import { UserAuth } from '../hooks/useAuth'

// eslint-disable-next-line
const ListMessages: React.FC<{ allMessages: any }> = ({ allMessages }) => {
  const { user } = UserAuth()

  return (
    <Box>
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
                {dayjs(message?.created_at).format('HH:MM')}
              </Text>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default ListMessages
