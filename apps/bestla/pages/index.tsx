import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

const Index = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState({
    id_user_transmitter: 10,
    id_user_receiver: 28,
    content: '',
  })
  const [name, setName] = useState<string>('')

  const [joined, setJoined] = useState<boolean>(false)

  useEffect(() => {
    socket.emit('findAllMessages', {}, (data) => {
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

  const join = () => {
    socket.emit('join', { name }, () => {
      setJoined(true)
    })
  }

  const handleSubmit = () => {
    if (message.content === '') return

    const data = {
      ...message,
    }

    socket.emit('createMessage', data)
    setMessage({
      id_user_transmitter: 0,
      id_user_receiver: 0,
      content: '',
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        {joined ? (
          <div>
            <input
              type="text"
              placeholder="Enter message"
              value={message.content}
              onChange={(e) =>
                setMessage({ ...message, content: e.target.value })
              }
            />
            <button onClick={handleSubmit}>Send message</button>

            <div>
              {messages?.map((message, index: number) => (
                <p key={index}>
                  [{message.id_user_transmitter}] - {message.content}
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
