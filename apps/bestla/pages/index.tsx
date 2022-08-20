import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Index = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages])
    }

    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [messages])

  console.log(messages)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newMessage = {
      body: message,
      from: 'Me',
    }
    setMessages([newMessage, ...messages])
    setMessage('')
    socket.emit('message', newMessage.body)
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        {/* <p>{response}</p> */}

        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send message</button>
      </div>
    </div>
  )
}

export default Index
