import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Index = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState<string>('')
  const [name, setName] = useState<string>('')

  const [joined, setJoined] = useState<boolean>(false)

  useEffect(() => {
    socket.emit('findAllMessages', {}, (data) => {
      setMessages(data)
    })

    socket.on('message', (message) => {
      console.log('hello', message)
      setMessages(message)
    })
  }, [])

  // console.log(messages)

  const join = () => {
    socket.emit('join', { name }, () => {
      setJoined(true)
    })
  }

  const handleSubmit = () => {
    if (message === '') return

    socket.emit('createMessage', { text: message, name }, (response) => {
      setMessages([...messages, response])
    })

    setMessage('')
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        {joined ? (
          <div>
            <input
              type="text"
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSubmit}>Send message</button>

            <div>
              {messages.map((message, index: number) => (
                <p key={index}>
                  [{message.name}] - {message.text}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div>whats your name</div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={join}>send name</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
