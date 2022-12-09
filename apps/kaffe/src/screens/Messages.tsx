import React from 'react'
import { Box } from '@chakra-ui/react'

import Layout from '../layout'
import InputUI from '../ui/Input'
import TextUI from '../ui/Text'

import ProfileTagChat from '../components/ProfileTagChat'

const Messages: React.FC = () => {
  return (
    <Layout p="1.25rem">
      <Box>
        <TextUI color="primary" fontWeight="normal" fontSize="1.15rem">
          Mensajes
        </TextUI>

        <Box mt="0.5rem">
          <InputUI placeholder="Buscar usuario" />
        </Box>
      </Box>

      {/* List of users */}
      <Box mt="1.25rem">
        <ProfileTagChat />
        <ProfileTagChat />
        <ProfileTagChat />
        <ProfileTagChat />
        <ProfileTagChat />
        <ProfileTagChat />
      </Box>
    </Layout>
  )
}

export default Messages
