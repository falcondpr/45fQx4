import React from 'react'
import { Box, Button, Grid, Text } from '@chakra-ui/react'

import Input from '../components/Input'

const Register: React.FC = () => {
  return (
    <Box p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Crear una cuenta
      </Text>

      <Grid rowGap="20px" mt="15px">
        <Input placeholder="Nombre" />
        <Input placeholder="Email" />
        <Input placeholder="Contrasena" />

        <Button bgColor="gray.600" rounded="2px" color="white">
          Registrarse
        </Button>
      </Grid>
    </Box>
  )
}

export default Register
