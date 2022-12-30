import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { IoShirtSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import BoxColor from '../ui/BoxColor'
import HeadingUI from '../ui/Heading'
import TextUI from '../ui/Text'

const Menu: React.FC = () => {
  return (
    <>
      <Box
        position="fixed"
        bgColor="rgba(0,0,0,0.6)"
        w="full"
        h="full"
        top="0"
        left="0"
      ></Box>

      <Box
        bgColor="white"
        borderTopLeftRadius="2rem"
        borderTopRightRadius="2rem"
        p="2rem 1.25rem"
        position="absolute"
        w="full"
        left="0"
        bottom="0"
        zIndex="50"
      >
        <HeadingUI>Menu</HeadingUI>

        <TextUI textTransform="uppercase" fontSize="1.125rem" my="0.7rem">
          Acciones
        </TextUI>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#023E8A">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Publicar un producto
            </TextUI>
          </Flex>
        </Link>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#FF5555">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Generar token
            </TextUI>
          </Flex>
        </Link>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#FFC300">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Enviar dinero
            </TextUI>
          </Flex>
        </Link>

        <TextUI textTransform="uppercase" fontSize="1.125rem" my="0.7rem">
          LISTA
        </TextUI>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#335C67">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Lista de tickets
            </TextUI>
          </Flex>
        </Link>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#DC2F02">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Historial de compras
            </TextUI>
          </Flex>
        </Link>
      </Box>
    </>
  )
}

export default Menu
