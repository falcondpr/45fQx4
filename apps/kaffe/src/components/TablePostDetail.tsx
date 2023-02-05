import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { BsCheckCircleFill } from 'react-icons/bs'

import { TextUI } from '../ui'

const TablePostDetail: React.FC = () => {
  return (
    <Box p="1rem 0 2rem 0" px="1.25rem">
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        bgColor="#F5F5F5"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="3px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="0.9rem" color="#7A7A7A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#7A7A7A"
            textTransform="uppercase"
            fontSize="0.9rem"
          >
            Estado
          </TextUI>
        </Flex>
        <TextUI
          color="#333"
          fontSize="0.9rem"
          textTransform="uppercase"
          textAlign="right"
        >
          usado
        </TextUI>
      </Grid>

      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        bgColor="#FFF"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="0.9rem" color="#7A7A7A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#7A7A7A"
            textTransform="uppercase"
            fontSize="0.9rem"
          >
            CATEGORIA
          </TextUI>
        </Flex>
        <TextUI
          color="#333"
          fontSize="0.9rem"
          textTransform="uppercase"
          textAlign="right"
        >
          prenda
        </TextUI>
      </Grid>

      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        bgColor="#F5F5F5"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="0.9rem" color="#7A7A7A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#7A7A7A"
            textTransform="uppercase"
            fontSize="0.9rem"
          >
            MET PAGO
          </TextUI>
        </Flex>
        <TextUI
          color="#333"
          fontSize="0.9rem"
          textTransform="uppercase"
          textAlign="right"
        >
          efectivo, transferencia bancaria
        </TextUI>
      </Grid>

      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        bgColor="#FFF"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="0.9rem" color="#7A7A7A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#7A7A7A"
            textTransform="uppercase"
            fontSize="0.9rem"
          >
            PRECIO
          </TextUI>
        </Flex>
        <TextUI
          color="#333"
          fontSize="0.9rem"
          textTransform="uppercase"
          textAlign="right"
        >
          GS. 240.000
        </TextUI>
      </Grid>

      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        bgColor="#F5F5F5"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="0.9rem" color="#7A7A7A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#7A7A7A"
            textTransform="uppercase"
            fontSize="0.9rem"
          >
            VENDEDOR
          </TextUI>
        </Flex>
        <TextUI
          color="#333"
          fontSize="0.9rem"
          textTransform="uppercase"
          textAlign="right"
        >
          no verificado
        </TextUI>
      </Grid>
    </Box>
  )
}

export default TablePostDetail
