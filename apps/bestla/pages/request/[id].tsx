import { useQuery } from '@tanstack/react-query'
import { getRequest } from '../../utils/request'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Request = () => {
  const router = useRouter()

  const [messages, setMessages] = useState([])
  const [message] = useState({
    id_vendor: 10,
    id_buyer: 28,
    content: '',
    id_request: 1,
  })

  const { data: request } = useQuery(['todos', router?.query], () =>
    getRequest(Number(router?.query.id)),
  )

  useEffect(() => {
    socket.emit('findAllMessages', { id_request: request?.data.id }, (data) => {
      setMessages(data)
    })

    socket.on('message', () => {
      setMessages((p) => {
        return [...p, message]
      })
    })

    return () => {
      socket.off('message')
    }
    // eslint-disable-next-line
  }, [messages])

  console.log(messages)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => router.back()}>volver</button>

      <div>
        <h3>{request?.data.id}</h3>
        <p>
          Id product:{' '}
          <span style={{ fontWeight: 'bold' }}>{request?.data.id_product}</span>
        </p>
      </div>

      <hr />

      <div>
        <h3>Lista de mensajes</h3>
      </div>
    </div>
  )
}

export default Request
