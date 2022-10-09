import React from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Chat from '../components/Chat'
import Layout from '../Layout'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Layout p="20px" mb="50px">
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
      </Grid>
    </Layout>
  )
}

export default Home
