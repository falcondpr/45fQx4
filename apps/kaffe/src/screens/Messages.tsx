import React from 'react'
import { Box } from '@chakra-ui/react'

import Layout from '../layout'
import { InputUI } from '../ui'

import ProfileTagChat from '../components/ProfileTagChat'
import BackButton from '../components/BackButton'

const Messages: React.FC = () => {
  return (
    <Layout p="1.25rem">
      <BackButton title="Mensajes" route="/" />

      <Box mt="1.25rem">
        <InputUI placeholder="Buscar usuario" />
      </Box>

      {/* List of users */}
      <Box mt="1.25rem" mb="-1.25rem">
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
