import React, { useState } from 'react'
import { Box, Button, Flex, Image } from '@chakra-ui/react'

import BackButton from '../components/BackButton'
import Empty from '../layout/Empty'
import TextUI from '../ui/Text'
import ScrollBanner from '../components/ScrollBanner'
import { images } from '../data/gallery'

const PostDetail: React.FC = () => {
  const [imageSelected, setImageSelected] = useState<string | null>('1')

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
      <Box overflow="hidden" mt="0.8rem" position="relative" h="6.25rem">
        <Flex overflowX="auto" w="full" className="hide-scroll">
          {images.map((image, index) => (
            <Button
              overflow="hidden"
              border="3px solid"
              borderColor={
                image.id === imageSelected ? 'secondary-gray' : 'white'
              }
              minW="6.25rem"
              p="0"
              rounded="2px"
              h="6.25rem"
              ml={index === 0 ? '20px' : 0}
              w="6.25rem"
              key={image.id}
              flex="1"
              mr={index === images.length - 1 ? '20px' : '0.5rem'}
              onClick={() => setImageSelected(image.id)}
              _focusVisible={{}}
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

      {/* Description */}
      <Box px="1.25rem" my="1rem">
        <TextUI>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          enim tellus, consequat sed pellentesque ut, rhoncus vel justo. Cras a
          augue sodales, tempor nisl ac, ornare turpis. Vestibulum sagittis vel
          magna in porta.
        </TextUI>

        <TextUI mt="1rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          enim tellus, consequat sed pellentesque ut, rhoncus vel justo. Cras a
          augue sodales, tempor nisl ac, ornare turpis. Vestibulum sagittis vel
          magna in porta.
        </TextUI>
      </Box>

      {/* Vendor */}
      <Box px="1.25rem" mb="1.25rem">
        <TextUI
          fontWeight="semibold"
          mb="0.5rem"
          fontSize="1.05rem"
          color="primary"
        >
          Vendedor
        </TextUI>

        <Flex alignItems="center">
          <Box>
            <Image
              src="https://bit.ly/3YGxhTy"
              w="3.125rem"
              h="3.125rem"
              objectFit="cover"
              rounded="full"
              alt="Profile picture"
            />
          </Box>
          <Box ml="0.7rem">
            <TextUI color="primary">Alberto Pasarella</TextUI>
            <TextUI fontSize="0.8rem" color="light-gray">
              @alberto_pasarella
            </TextUI>
          </Box>
        </Flex>
      </Box>

      {/* ScrollBanner */}
      <ScrollBanner />
    </Empty>
  )
}

export default PostDetail
