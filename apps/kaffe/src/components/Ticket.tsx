import React from 'react'
import { Box, Flex, Grid, Image } from '@chakra-ui/react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdOutlineWatchLater } from 'react-icons/md'

import TextUI from '../ui/Text'

const Ticket: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="3.75rem 1fr"
      p="0.7rem"
      bgColor="#F0F0F0"
      rounded="1.25rem"
      mb="1.5rem"
    >
      <Box>
        <Image
          src="https://bit.ly/3XDQX91"
          w="full"
          h="full"
          objectFit="cover"
          rounded="1.25rem 0 0 1.25rem"
          alt=""
        />
      </Box>

      <Box ml="0.75rem">
        <TextUI
          // mb="5px"
          fontSize="1.125rem"
          textTransform="uppercase"
          color="primary"
          fontWeight="medium"
        >
          Nombre del producto
        </TextUI>

        <TextUI
          textTransform="uppercase"
          color="#4D88D3"
          fontSize="0.875rem"
          fontWeight="semibold"
        >
          Entregado
        </TextUI>

        <Grid mt="0.5rem" gridTemplateColumns="1fr auto 1fr">
          <Box justifySelf="start">
            <TextUI
              textTransform="uppercase"
              color="#848484"
              fontSize="0.75rem"
            >
              vendedor
            </TextUI>
            <TextUI color="#333" fontSize="0.75rem" fontWeight="medium">
              fervillalbag
            </TextUI>
          </Box>
          <Box fontSize="2.5rem" color="#999">
            <CiDeliveryTruck />
          </Box>
          <Box justifySelf="end">
            <TextUI
              textTransform="uppercase"
              color="#848484"
              fontSize="0.75rem"
            >
              comprador
            </TextUI>
            <TextUI color="#333" fontSize="0.75rem" fontWeight="medium">
              lucas_lamas
            </TextUI>
          </Box>
        </Grid>

        <Box mt="0.5rem">
          <Flex alignItems="center">
            <TextUI fontSize="0.9rem">
              <MdOutlineWatchLater />
            </TextUI>
            <TextUI ml="4px" fontSize="0.8rem">
              hace 2 horas
            </TextUI>
          </Flex>
        </Box>
      </Box>
    </Grid>
  )
}

export default Ticket
