import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { HeadingUI, TextUI, InputUI, ButtonUI } from '../ui'
import { ValidationUserLogin } from '../validations/login'
import { AuthLogin } from '../helpers/auth'
import { ResponseValidation } from '../interfaces/validation'

const Login: React.FC = () => {
  const { login } = AuthLogin()

  const [userInfo, setUserInfo] = React.useState<{
    email?: string
    password: string
  }>({
    email: '',
    password: '',
  })

  const handleLoginUser = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    const responseValidation = ValidationUserLogin(
      userInfo,
    ) as ResponseValidation

    if (!responseValidation.success) return

    try {
      await login(userInfo)
    } catch (error) {
      console.log(error)
      toast.error('Ha ocurrido un error. Intentelo de nuevo.')
    }
  }

  return (
    <Box p="20px" position="relative" minH="100vh">
      <Grid as="form" w="full" py="2rem" onSubmit={handleLoginUser}>
        <HeadingUI textAlign="center">Hola de nuevo!</HeadingUI>
        <TextUI textAlign="center" mt="10px">
          Si ya tienes una cuenta
          <br /> ahora ingresa
        </TextUI>

        <Box mt="1rem">
          <InputUI
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            title="username o email"
          />
          <InputUI
            type="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            title="contrasena"
          />

          <ButtonUI type="submit">Ingresa</ButtonUI>
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
