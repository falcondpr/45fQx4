import React from 'react'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import HeaderProfile from '../components/HeaderProfile'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <HeaderProfile
        navigate={navigate}
        userAvatar={'https://bit.ly/3FpDJGG'}
      />
    </Box>
  )
}

export default Home
