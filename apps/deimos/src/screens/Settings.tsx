import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import Layout from '../Layout'

const Settings: React.FC = () => {
  return (
    <Layout p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Ajustes
      </Text>

      <Button mt="15px" bgColor="gray.600" rounded="2px" color="white">
        Cerrar sesion
      </Button>
    </Layout>
  )
}

export default Settings
