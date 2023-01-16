import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import TextUI from '../ui/Text'

const Ticket: React.FC = () => {
  return (
    <Box
      shadow="lg"
      border="2px solid"
      borderColor="gray.400"
      p="1rem"
      rounded="4px"
      mb="2rem"
    >
      <TextUI
        mb="0.5rem"
        fontSize="20px"
        textTransform="uppercase"
        color="primary"
        fontWeight="semibold"
      >
        Nombre del producto
      </TextUI>

      <Grid alignItems="center" gridTemplateColumns="1fr auto 1fr" gap="0.7rem">
        <Box
          border="1px solid"
          borderColor="gray.300"
          rounded="4px"
          p="0.3rem 0.5rem"
        >
          <TextUI fontSize="14px" color="primary">
            vendedor
          </TextUI>
          <TextUI fontSize="14px" fontWeight="semibold" color="primary">
            lucas_lamas
          </TextUI>
        </Box>

        <Box>
          <Grid
            alignItems="center"
            gap="0.2rem"
            gridTemplateColumns="0.7rem 1fr 0.7rem"
          >
            <Grid
              placeItems="center"
              w="0.7rem"
              h="0.7rem"
              rounded="full"
              bgColor="#999"
            >
              <Box w="0.3rem" h="0.3rem" rounded="full" bgColor="#fff"></Box>
            </Grid>
            <Box border="2px dashed #999"></Box>
            <Grid
              placeItems="center"
              w="0.7rem"
              h="0.7rem"
              rounded="full"
              bgColor="#FDC500"
            >
              <Box w="0.3rem" h="0.3rem" rounded="full" bgColor="#FDC500"></Box>
            </Grid>
          </Grid>

          <TextUI
            mt="0.1rem"
            fontWeight="semibold"
            color="#FDC500"
            textTransform="uppercase"
          >
            En espera
          </TextUI>
        </Box>

        <Box
          bgColor="#fff"
          border="1px solid"
          borderColor="primary"
          rounded="4px"
          p="0.3rem 0.5rem"
          boxShadow="0px 0px 5px #219ebc"
        >
          <TextUI fontSize="14px">comprador</TextUI>
          <TextUI fontSize="14px" fontWeight="semibold" color="primary">
            fervillalbag
          </TextUI>
        </Box>
      </Grid>

      <Box mt="0.7rem">
        <Flex
          bgColor="#E1E1E1"
          p="0.5rem 0.625rem"
          justifyContent="space-between"
        >
          <TextUI color="#636363">fecha de creacion</TextUI>
          <TextUI fontWeight="semibold" color="#333">
            15/01/23
          </TextUI>
        </Flex>

        <Flex
          bgColor="#F5F5F5"
          p="0.5rem 0.625rem"
          justifyContent="space-between"
        >
          <TextUI color="#636363">fecha de entrega</TextUI>
          <TextUI color="#333" fontWeight="semibold">
            --/--/----
          </TextUI>
        </Flex>
      </Box>
    </Box>
  )
}

export default Ticket
