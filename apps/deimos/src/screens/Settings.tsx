import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import Layout from '../Layout'
import { UserAuth } from '../hooks/useAuth'

const Settings: React.FC = () => {
  const { logout } = UserAuth()

  return (
    <Layout p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Ajustes
      </Text>

      <Button
        mt="15px"
        bgColor="gray.600"
        rounded="2px"
        color="white"
        onClick={logout}
      >
        Cerrar sesion
      </Button>
    </Layout>
  )
}

export default Settings
