import React, { useContext } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Chat from '../components/Chat'
import Layout from '../Layout'
import { UserContext } from '../context/UserContext'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  return (
    <Layout p="20px" mb="50px">
      <Text fontSize="24px" fontWeight="bold">
        Home
      </Text>

      <Text fontSize="12px" color="gray.500">
        Hola mi nombre es{' '}
        <Text as="span" fontWeight="bold" color="gray.600">
          {user?.name}
        </Text>{' '}
        y estos son mis mensajes
      </Text>

      <Grid rowGap="20px" mt="10px">
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
