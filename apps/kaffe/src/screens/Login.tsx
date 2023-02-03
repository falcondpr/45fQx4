import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { HeadingUI, TextUI, InputUI, ButtonUI } from '../ui'

const Login: React.FC = () => {
  return (
    <Box p="20px" position="relative" minH="100vh">
      <Grid w="full" py="2rem">
        <HeadingUI textAlign="center">Hola de nuevo!</HeadingUI>
        <TextUI textAlign="center" mt="10px">
          Si ya tienes una cuenta
          <br /> ahora ingresa
        </TextUI>

        <Box mt="1rem">
          <InputUI title="username o email" />
          <InputUI title="contrasena" />

          <ButtonUI>Ingresa</ButtonUI>
        </Box>
      </Grid>

      <Box position="absolute" w="full" bottom="0.7rem" right="0" py="0.8rem">
        <TextUI textAlign="center">
          Aun no tienes una cuenta?{' '}
          <Link to="/register">
            <TextUI color="primary" as="span" textDecor="underline">
              Registrate
            </TextUI>
          </Link>
        </TextUI>
      </Box>
    </Box>
  )
}

export default Login
