import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import HeadingUI from '../ui/Heading'
import TextUI from '../ui/Text'
import InputUI from '../ui/Input'
import ButtonUI from '../ui/Button'

const Register: React.FC = () => {
  return (
    <Box p="20px" position="relative" minH="100vh">
      <Grid placeItems="center" py="2rem">
        <HeadingUI>Bienvenido!</HeadingUI>
        <TextUI textAlign="center" mt="10px">
          Si aun no tienes una cuenta debes registrarte
        </TextUI>

        <Box mt="1rem">
          <InputUI title="username" />
          <InputUI title="email" />
          <InputUI title="contrasena" />
          <InputUI title="confirmar contrasena" />

          <ButtonUI>Crear cuenta</ButtonUI>
        </Box>
      </Grid>

      <Box position="absolute" w="full" bottom="0" right="0" py="0.8rem">
        <TextUI textAlign="center">
          Ya tienes una cuenta?{' '}
          <Link to="/login">
            <TextUI color="primary" as="span" textDecor="underline">
              Inicia sesion
            </TextUI>
          </Link>
        </TextUI>
      </Box>
    </Box>
  )
}

export default Register
