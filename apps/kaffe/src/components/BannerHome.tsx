import React from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import { FaInfo } from 'react-icons/fa'

import { TextUI } from '../ui'

const BannerHome: React.FC = () => {
  return (
    <Box position="relative">
      <Box
        bgImage="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 80%)"
        h="full"
        w="full"
        position="absolute"
        left="0"
      />

      <TextUI
        color="white"
        pl="20px"
        // mb="10px"
        position="absolute"
        bottom="0.75rem"
        left="0"
      >
        Marca ropa, verano
      </TextUI>
      <Image
        w="full"
        shadow="xl"
        h="14rem"
        objectFit="cover"
        objectPosition="center"
        src="https://bit.ly/3GMtXhB"
        fallbackSrc="../assets/fallback-image.png"
        alt="Banner ad"
      />
      <Button
        rounded="full"
        display="grid"
        placeItems="center"
        minW="initial"
        w="2.5rem"
        h="2.5rem"
        color="primary"
        bgColor="white"
        fontSize="1rem"
        position="absolute"
        bottom="1rem"
        right="1rem"
      >
        <FaInfo />
      </Button>
    </Box>
  )
}

export default BannerHome
