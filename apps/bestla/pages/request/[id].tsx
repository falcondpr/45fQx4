import { GetServerSideProps, NextPage } from 'next'
import { getRequest } from '../../utils/request'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

interface RequestProps {
  request: {
    id: number
    id_product: number
    id_vendor: number
    id_buyer: number
    status: boolean
    created_at: string
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = await getRequest(Number(context.query.id))
  return {
    props: {
      request: request.data,
    },
  }
}

const Request: NextPage<RequestProps> = ({ request }) => {
  const router = useRouter()

  const [messages, setMessages] = useState([])
  const [message] = useState({
    id_vendor: 10,
    id_buyer: 28,
    content: '',
    id_request: 1,
  })

  useEffect(() => {
    socket.emit('findAllMessages', { id_request: request.id }, (data) => {
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

  console.log(request)
  console.log(messages)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => router.back()}>volver</button>

      <div>
        <h3>{request.id}</h3>
        <p>
          Id product:{' '}
          <span style={{ fontWeight: 'bold' }}>{request.id_product}</span>
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
