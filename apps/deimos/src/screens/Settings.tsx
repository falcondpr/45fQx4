import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

const Settings: React.FC = () => {
  return (
    <Box p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Ajustes
      </Text>

      <Button mt="15px" bgColor="gray.600" rounded="2px" color="white">
        Cerrar sesion
      </Button>
    </Box>
  )
}

export default Settings
