import React from 'react'
import { NextPage } from 'next'

import { UserAuth } from '../hooks/useAuth'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  const { login } = UserAuth()

  const handleLogin = async () => {
    const data = {
      email: 'fer@correo.com',
      password: 'fer',
    }

    const response = await login(data)

    if (response.success) {
      toast.success('Sesión iniciada correctamente')
      router.push('/')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <article>
        <p style={{ marginBottom: 0 }}>Email:</p>
        <input type="text" />
      </article>
      <article>
        <p style={{ marginBottom: 0 }}>Password:</p>
        <input type="password" />
      </article>

      <button onClick={handleLogin} style={{ marginTop: 20 }}>
        Ingresar
      </button>
    </div>
  )
}

export default Login
