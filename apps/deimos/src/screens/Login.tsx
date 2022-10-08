import React from 'react'
import { Box, Button, Grid, Text } from '@chakra-ui/react'

import Input from '../components/Input'

const Login: React.FC = () => {
  return (
    <Box p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Ingresar
      </Text>

      <Grid rowGap="20px" mt="15px">
        <Input placeholder="Email" />
        <Input placeholder="Contrasena" />

        <Button bgColor="gray.600" rounded="2px" color="white">
          Iniciar
        </Button>
      </Grid>
    </Box>
  )
}

export default Login
