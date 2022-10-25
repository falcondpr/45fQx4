import React, { useContext } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import Chat from '../components/Chat'
import Layout from '../Layout'
import { UserContext } from '../context/UserContext'
import { getTeamsByUser } from '../utils/team'

const Home: React.FC = () => {
  const { user } = useContext(UserContext)

  const { data: allMessagesFetched } = useQuery(
    ['getAllMessages', user?.id],
    () => user?.id && getTeamsByUser(user.id),
    {
      refetchOnWindowFocus: false,
    },
  )
  const allMessages = allMessagesFetched?.data

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
        {/* eslint-disable-next-line */}
        {allMessages?.map((chat: any) => (
          <Chat key={chat._id} user={user} team={chat} />
        ))}
      </Grid>
    </Layout>
  )
}

export default Home
