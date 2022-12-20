import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { Link, NavigateFunction } from 'react-router-dom'

import TextUI from '../ui/Text'

const HeaderProfile: React.FC<{
  navigate: NavigateFunction
  userAvatar: string
}> = ({ navigate, userAvatar }) => {
  return (
    <Flex
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'space-between' }}
      p="1.25rem"
    >
      <Box cursor="pointer" onClick={() => navigate('/profile')}>
        <Image
          w="2.5rem"
          h="2.5rem"
          objectFit="cover"
          rounded="2.5rem"
          src={userAvatar}
          fallbackSrc="../assets/fallback-image.png"
          alt="Profile picture"
        />
      </Box>
      <Box>
        <Link to="/tickets">
          <TextUI p="5px" textTransform="uppercase" color="primary">
            Tickets
          </TextUI>
        </Link>
      </Box>
    </Flex>
  )
}

export default HeaderProfile
