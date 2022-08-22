import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Index = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const receiveMessage = (message: string) => {
      setMessages([message, ...messages])
    }

    socket.on('findAllMessages', receiveMessage)

    return () => {
      socket.off('findAllMessages', receiveMessage)
    }
  }, [messages])

  console.log(messages)

  const handleSubmit = () => {
    const newMessage = {
      body: message,
      from: 'Me',
    }
    setMessages([newMessage, ...messages])
    setMessage('')
    socket.emit('createMessage', newMessage.body)
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Send message</button>
      </div>

      <div>
        {messages.map((message: any, index: number) => (
          <p key={index}>{message.body}</p>
        ))}
      </div>
    </div>
  )
}

export default Index
