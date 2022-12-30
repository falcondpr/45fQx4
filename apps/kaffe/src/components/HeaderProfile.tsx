import React from 'react'
import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { NavigateFunction } from 'react-router-dom'

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
        <Button
          display="flex"
          h="2.5rem"
          px="1rem"
          rounded="4px"
          border="1px solid"
          borderColor="primary"
          fontSize="0.875rem"
          bgColor="white"
        >
          <TextUI color="primary" fontWeight="normal" textTransform="uppercase">
            id user:
          </TextUI>
          <TextUI fontFamily="Arial, sans-serif" color="primary" ml="4px">
            A1623
          </TextUI>
        </Button>
      </Box>
    </Flex>
  )
}

export default HeaderProfile
