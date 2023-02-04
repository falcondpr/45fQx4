import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { BsCheckCircleFill } from 'react-icons/bs'

import { TextUI } from '../ui'

const TablePostDetail: React.FC = () => {
  return (
    <Box p="1rem 0 2rem 0" px="1.25rem">
      <Flex
        bgColor="#F5F5F5"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="3px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="1.1rem" color="#9A9A9A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#9A9A9A"
            textTransform="uppercase"
            fontSize="1.1rem"
          >
            Estado
          </TextUI>
        </Flex>
        <TextUI color="#333" fontSize="1.1rem" textTransform="uppercase">
          usado
        </TextUI>
      </Flex>

      <Flex
        bgColor="#FFF"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="1.1rem" color="#9A9A9A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#9A9A9A"
            textTransform="uppercase"
            fontSize="1.1rem"
          >
            CATEGORIA
          </TextUI>
        </Flex>
        <TextUI color="#333" fontSize="1.1rem" textTransform="uppercase">
          prenda
        </TextUI>
      </Flex>

      <Flex
        bgColor="#F5F5F5"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="1.1rem" color="#9A9A9A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#9A9A9A"
            textTransform="uppercase"
            fontSize="1.1rem"
          >
            MET PAGO
          </TextUI>
        </Flex>
        <TextUI color="#333" fontSize="1.1rem" textTransform="uppercase">
          efectivo, transf
        </TextUI>
      </Flex>

      <Flex
        bgColor="#FFF"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="1.1rem" color="#9A9A9A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#9A9A9A"
            textTransform="uppercase"
            fontSize="1.1rem"
          >
            PRECIO
          </TextUI>
        </Flex>
        <TextUI color="#333" fontSize="1.1rem" textTransform="uppercase">
          GS. 240.000
        </TextUI>
      </Flex>

      <Flex
        bgColor="#F5F5F5"
        py="0.5rem"
        px="0.625rem"
        justifyContent="space-between"
        borderTop="2px solid #D1D4D6"
      >
        <Flex alignItems="center">
          <Text fontSize="1.1rem" color="#9A9A9A">
            <BsCheckCircleFill />
          </Text>
          <TextUI
            ml="0.4rem"
            color="#9A9A9A"
            textTransform="uppercase"
            fontSize="1.1rem"
          >
            VENDEDOR
          </TextUI>
        </Flex>
        <TextUI color="#333" fontSize="1.1rem" textTransform="uppercase">
          no verificado
        </TextUI>
      </Flex>
    </Box>
  )
}

export default TablePostDetail
