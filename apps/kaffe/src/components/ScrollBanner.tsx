import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { TextUI, ButtonUI } from '../ui'

const ScrollBanner: React.FC = () => {
  return (
    <Box p="1.25rem" h="6.25rem" bgColor="primary" position="sticky" bottom="0">
      <Flex alignItems="center" gap="0 1rem">
        <Box flex="1">
          <TextUI color="white" fontSize="1.25rem" fontWeight="semibold">
            Gs. 200.000
          </TextUI>
          <TextUI color="border-color" fontSize="0.9rem">
            San Lorenzo, Central
          </TextUI>
        </Box>
        <Box flex="1">
          <ButtonUI fontWeight="semibold" bgColor="white" color="primary">
            Comprar
          </ButtonUI>
        </Box>
      </Flex>
    </Box>
  )
}

export default ScrollBanner
