import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { IoSend } from 'react-icons/io5'

import Empty from '../layout/Empty'
import BackButton from '../components/BackButton'
import MessagePill from '../components/MessagePill'
import InputUI from '../ui/Input'

const Message: React.FC = () => {
  return (
    <Empty>
      <Box>
        <Box p="1.25rem" position="sticky" top="0" bgColor="white">
          <BackButton title="Lucas Lamas" />
        </Box>

        <Box pt="1rem" pb="5.5rem">
          <MessagePill type="receiver" title="Hola que tal?" />
          <MessagePill
            type="receiver"
            title="Hola que tal? Hola que tal? Hola que tal? Hola que tal?"
          />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
          <MessagePill type="transmitter" title="Hola Fer bien y vos?" />
        </Box>
      </Box>

      <Box
        left="0"
        py="1rem"
        px="1.25rem"
        position="fixed"
        bottom="0"
        bgColor="white"
      >
        <Flex
          w="calc(100vw - 2.5rem)"
          css={{ div: { margin: 0 }, label: { margin: 0 } }}
        >
          <InputUI
            _focusVisible={{ outline: 0 }}
            flex="1"
            rounded="6px 0 0 6px"
            placeholder="Introducir mensaje"
            _placeholder={{ color: 'border-color' }}
            mb="0"
            borderRight="0"
          />
          <Button
            h="3.125rem"
            m="0"
            p="0"
            w="3.125rem"
            bgColor="primary"
            color="white"
            border="2px solid primary"
            rounded="0 6px 6px 0"
          >
            <IoSend />
          </Button>
        </Flex>
      </Box>
    </Empty>
  )
}

export default Message
