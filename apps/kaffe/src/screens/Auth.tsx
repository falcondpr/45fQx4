import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { HeadingUI, TextUI, ButtonUI } from '../ui'

const Auth: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box h="100vh" overflow="hidden">
      <Box
        bgImage="../assets/image-auth-header.png"
        h="70vh"
        bgPos="center"
        bgSize="cover"
      />
      <Box
        bgColor="white"
        borderTopLeftRadius="40px"
        borderTopRightRadius="40px"
        position="absolute"
        bottom="0"
        right="0"
        w="full"
        px="1.25rem"
        py="2rem"
      >
        <HeadingUI>Empieza a comprar y vender de forma segura</HeadingUI>
        <TextUI mt="10px">
          Se prima la experiencia del usuario y la seguridad usando nuestro
          sitio
        </TextUI>

        <Grid
          mt="20px"
          gridTemplateColumns={{ base: 'repeat(2, 1fr)' }}
          gap="20px"
        >
          <ButtonUI onClick={() => navigate('/register')}>
            Crear cuenta
          </ButtonUI>
          <ButtonUI bgColor="white" color="primary">
            Ingresar
          </ButtonUI>
        </Grid>
      </Box>
    </Box>
  )
}

export default Auth
