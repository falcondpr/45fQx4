import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, Button, Flex } from '@chakra-ui/react'
import { IoShirtSharp } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'

import BoxColor from '../ui/BoxColor'
import HeadingUI from '../ui/Heading'
import TextUI from '../ui/Text'
import { closeMenu } from '../features/menuSlice'

const Menu: React.FC = () => {
  const dispatch = useDispatch()

  const show = useSelector(
    (state: { menu: { show: boolean } }) => state.menu.show,
  )

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  return (
    <>
      <Box
        display={show ? 'block' : 'none'}
        onClick={handleCloseMenu}
        position="fixed"
        bgColor="rgba(0,0,0,0.6)"
        w="full"
        h="full"
        top="0"
        left="0"
      />

      <Box
        display={show ? 'block' : 'none'}
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
        <Button
          position="absolute"
          top="-4.5rem"
          left="50%"
          transform="translateX(-50%)"
          bgColor="red.500"
          color="white"
          boxShadow="2xl"
          onClick={handleCloseMenu}
          w="3.5rem"
          h="3.5rem"
          rounded="full"
          fontSize="2xl"
        >
          <FaTimes />
        </Button>

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
              Realizar transacción
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
