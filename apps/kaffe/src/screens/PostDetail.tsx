import { Box, Button, Flex, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import BackButton from '../components/BackButton'
import Empty from '../layout/Empty'

const images = [
  {
    id: 1,
    url: 'https://bit.ly/3VIqG99',
  },
  {
    id: 2,
    url: 'https://bit.ly/3VIqG99',
  },
  {
    id: 3,
    url: 'https://bit.ly/3VIqG99',
  },
  {
    id: 4,
    url: 'https://bit.ly/3VIqG99',
  },
  {
    id: 5,
    url: 'https://bit.ly/3VIqG99',
  },
  {
    id: 6,
    url: 'https://bit.ly/3VIqG99',
  },
  {
    id: 7,
    url: 'https://bit.ly/3VIqG99',
  },
]

const PostDetail: React.FC = () => {
  return (
    <Empty>
      <Box p="1.25rem">
        <BackButton title="Nombre del post" />
      </Box>

      {/* Principal Image */}
      <Box px="1.25rem">
        <Image
          src="https://bit.ly/3VIqG99"
          alt="Product image"
          fallbackSrc="../assets/fallback-image.png"
          w="full"
          objectFit="cover"
          h="21rem"
        />
      </Box>

      {/* List of images */}
      <Box overflow="hidden" position="relative" h="6.25rem">
        <Flex
          overflowX="auto"
          position="absolute"
          top="0"
          left="0"
          w="full"
          className="hide-scroll"
        >
          {images.map((image, index) => (
            <Button
              minW="initial"
              p="0"
              h="6.25rem"
              ml={index === 0 ? '20px' : 0}
              w="6.25rem"
              key={image.id}
              flex="1"
              mr={index === images.length - 1 ? '20px' : '10px'}
            >
              <Image
                src={image.url}
                w="6.25rem"
                h="6.25rem"
                objectFit="cover"
                alt=""
              />
            </Button>
          ))}
        </Flex>
      </Box>
    </Empty>
  )
}

export default PostDetail
