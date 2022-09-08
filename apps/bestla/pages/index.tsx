import React from 'react'
import { NextPage } from 'next'

import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Index: NextPage = () => {
  const handleSubmit = () => {
    const data = {
      content: 'content 2312',
      id_vendor: 'id vendor 2312',
      id_buyer: 'id buyer 2312',
    }

    socket.emit('createMessage', data)
  }

  return (
    <div style={{ padding: 10 }}>
      <div>
        <span style={{ display: 'block' }}>Lista de solicitudes</span>

        <button onClick={handleSubmit}>sending</button>
      </div>
    </div>
  )
}

export default Index
