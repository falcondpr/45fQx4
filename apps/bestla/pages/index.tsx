import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { UserAuth } from '../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { getRequests } from '../utils/request'

import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Index: NextPage = () => {
  const router = useRouter()
  const { user, logout } = UserAuth()

  const handleSubmit = () => {
    const data = {
      id_request: 1,
      content: 'content 2312',
      id_vendor: 1,
      id_buyer: 2,
    }

    socket.emit('createMessage', data)
  }

  const { data: requests } = useQuery(['todos'], getRequests)

  return (
    <div style={{ padding: 10 }}>
      <div>
        {user?._id ? (
          <span
            style={{
              display: 'block',
              fontSize: 22,
              textTransform: 'uppercase',
              color: 'green',
            }}
          >
            Bienvenido {user.name}
          </span>
        ) : (
          <span
            style={{
              display: 'block',
              color: 'red',
              fontSize: 22,
              textTransform: 'uppercase',
            }}
          >
            No tienes una cuenta iniciada
          </span>
        )}

        <button onClick={handleSubmit}>sending</button>
        {user ? (
          <button onClick={logout}>Cerrar sesión</button>
        ) : (
          <button onClick={() => router.push('/login')}>Inicia sesión</button>
        )}
      </div>

      <div>
        <h3>Lista de transacciones</h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {requests?.data?.map((request) => (
            <div
              key={request.id}
              style={{
                border: '1px solid #000',
                padding: 20,
                cursor: 'pointer',
              }}
              onClick={() => router.push(`/request/${request.id}`)}
            >
              <p style={{ margin: 0 }}>Nro: {request.id}</p>
              <p style={{ margin: 0 }}>Id prod: {request.id_product}</p>
              <p style={{ margin: 0, fontSize: 12, marginTop: 5 }}>
                Fecha creación: {request.created_at}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
