import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import TagProfile from './TagProfile'

const CardProduct: React.FC = () => {
  return (
    <Box>
      <Box>
        <Image
          rounded="6px"
          fallbackSrc="../assets/fallback-image.png"
          src="https://bit.ly/3VIqG99"
          alt=""
          w={{ base: 'full' }}
          h={{ base: '220px' }}
          objectFit="cover"
        />
      </Box>
      <Box>
        <Text fontWeight="semibold" color="primary" mt="3px">
          Jas Oversized
        </Text>
        <Box mt="3px">
          <TagProfile />
        </Box>
      </Box>
    </Box>
  )
}

export default CardProduct
