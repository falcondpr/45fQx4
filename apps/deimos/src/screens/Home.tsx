import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'

import Chat from '../components/Chat'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box p="20px">
      <Text fontSize="24px" fontWeight="bold">
        Home
      </Text>

      <Text fontSize="16px" color="gray.500">
        Mis mensajes
      </Text>

      <Grid rowGap="20px" mt="15px">
        <Chat
          onClick={() => navigate('/message')}
          user={{
            name: 'Fernando',
            message: 'Hola mi nombre es Fer',
            image: 'https://picsum.photos/80',
          }}
        />
        <Chat
          onClick={() => navigate('/message')}
          user={{
            name: 'Lucas',
            message: 'Hola que tal',
            image: 'https://picsum.photos/80',
          }}
        />
      </Grid>
    </Box>
  )
}

export default Home
