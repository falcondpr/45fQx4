import React from 'react'
import { Flex } from '@chakra-ui/react'

import { TextUI } from '../ui'

const MessagePill: React.FC<{ title: string; type: string }> = ({
  title,
  type,
}) => {
  return (
    <Flex
      mb="0.9rem"
      justifyContent={type === 'receiver' ? 'flex-start' : 'flex-end'}
    >
      <Flex
        maxW="90%"
        flexDir="column"
        display="inline-flex"
        rounded={type === 'receiver' ? '0 4px 4px 0' : '4px 0 0 4px'}
        bgColor={type === 'receiver' ? '#E9E9EB' : '#34C659'}
        py="0.5rem"
        alignItems="center"
        px="1rem"
      >
        <TextUI
          fontSize="0.95rem"
          color={type === 'receiver' ? 'primary' : 'white'}
        >
          {title}
        </TextUI>

        <TextUI
          color={type === 'receiver' ? 'border-color' : '#f2f2f2'}
          alignSelf="end"
          textAlign="right"
          fontSize="0.7rem"
        >
          11:20
        </TextUI>
      </Flex>
    </Flex>
  )
}

export default MessagePill
