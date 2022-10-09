import React, { useState } from 'react'
import { Box, Button, Grid, Text } from '@chakra-ui/react'
import toast from 'react-hot-toast'

import Input from '../components/Input'
import { UserAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/user'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { user, login } = UserAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginUser = async (e: any) => {
    e.preventDefault()

    if (!email || !password) {
      return toast.error('Todos los campos son obligatorios')
    }

    const data = { email, password }
    const response = await login(data)

    if (response.success) {
      toast.success('Sesión iniciada correctamente')
      return navigate('/')
    }
  }

  return (
    <Box p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Ingresar
      </Text>

      <Grid rowGap="20px" mt="15px">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contrasena"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          bgColor="gray.600"
          rounded="2px"
          color="white"
          onClick={handleLoginUser}
        >
          Iniciar
        </Button>
      </Grid>
    </Box>
  )
}

export default Login
