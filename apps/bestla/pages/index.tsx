import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { UserAuth } from '../hooks/useAuth'

// import { io } from 'socket.io-client'

// const socket = io('http://localhost:3333')

const Index: NextPage = () => {
  const router = useRouter()
  const { user, logout } = UserAuth()

  // const handleSubmit = () => {
  //   const data = {
  //     content: 'content 2312',
  //     id_vendor: 'id vendor 2312',
  //     id_buyer: 'id buyer 2312',
  //   }

  //   socket.emit('createMessage', data)
  // }

  return (
    <div style={{ padding: 10 }}>
      <div>
        {user?._id ? (
          <span style={{ display: 'block' }}>Bienvenido {user.name}</span>
        ) : (
          <span style={{ display: 'block' }}>
            No tienes una cuenta iniciada
          </span>
        )}

        {/* <button onClick={handleSubmit}>sending</button> */}
        {user ? (
          <button onClick={logout}>Cerrar sesión</button>
        ) : (
          <button onClick={() => router.push('/login')}>Inicia sesión</button>
        )}
      </div>
    </div>
  )
}

export default Index
