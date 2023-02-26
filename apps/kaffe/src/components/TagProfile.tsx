import { Box, Flex, Image } from '@chakra-ui/react'
import { TextUI } from '../ui'

const TagProfile = () => {
  return (
    <Flex alignItems="center">
      <Box w={{ base: '24px' }} h={{ base: '24px' }}>
        <Image
          src="https://bit.ly/3VVAR9Z"
          alt=""
          w={{ base: '24px' }}
          h={{ base: '24px' }}
          objectFit="cover"
          rounded="full"
        />
      </Box>
      <Box ml="8px">
        <TextUI fontSize={{ base: '14px' }}>Vanessa Valdez</TextUI>
      </Box>
    </Flex>
  )
}

export default TagProfile
