import React, { useState } from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { FaUser } from 'react-icons/fa'
import { SiMaildotru } from 'react-icons/si'
import { FiLogOut } from 'react-icons/fi'
import { IoShirtSharp } from 'react-icons/io5'
import { GiInjustice } from 'react-icons/gi'
import { BsPatchCheckFill } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

import Layout from '../layout'
import BoxColor from '../ui/BoxColor'
import TextUI from '../ui/Text'
import { MdLocalGroceryStore } from 'react-icons/md'
import { GoKey } from 'react-icons/go'
import Logout from '../components/Logout'

const Profile: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false)

  return showLogoutModal ? (
    <Logout setShowLogoutModal={setShowLogoutModal} />
  ) : (
    <Layout>
      {/* Banner */}
      <Box
        position="relative"
        h="7.5rem"
        bgSize="cover"
        bgImage="url(https://bit.ly/3uKlINg)"
      >
        <Button
          position="absolute"
          top="1.25rem"
          right="1.25rem"
          fontSize="1.1rem"
          color="primary"
          p="0.75rem"
          onClick={() => setShowLogoutModal(true)}
        >
          <FiLogOut />
        </Button>
      </Box>

      {/* Profile */}
      <Box pl="1.25rem" mt="-3.125rem" position="relative" zIndex="10">
        <Image
          src="https://bit.ly/3PlI4hH"
          alt=""
          w="6.25rem"
          h="6.25rem"
          objectFit="cover"
          rounded="full"
          border="3px solid"
          borderColor="white"
        />
      </Box>

      {/* Profile Info */}
      <Box p="0.3125rem 1.25rem">
        <Flex alignItems="center">
          <TextUI fontWeight="bold" color="primary">
            Lujan Vera
          </TextUI>
          <Text color="light-gray" ml="0.35rem" fontSize="1.2rem">
            <BsPatchCheckFill />
          </Text>
        </Flex>
        <TextUI fontSize="0.8rem" color="light-gray">
          @lujan_vera
        </TextUI>
      </Box>

      {/* Profile Options */}
      <Box p="0.65rem 1.25rem">
        <TextUI fontSize="1.125rem" color="primary">
          Informacion de usuario
        </TextUI>

        <Box mt="0.75rem">
          <Link to="/">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#023E8A">
                <IoShirtSharp />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Post publicados
              </TextUI>
            </Flex>
          </Link>

          <Link to="/">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#335C67">
                <MdLocalGroceryStore />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Post guardados
              </TextUI>
            </Flex>
          </Link>
        </Box>

        <TextUI fontSize="1.125rem" color="primary">
          Editar perfil
        </TextUI>

        <Box mt="0.75rem">
          <Link to="/">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#2A9D8F">
                <SiMaildotru />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Correo electronico
              </TextUI>
            </Flex>
          </Link>

          <Link to="/">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#264653">
                <FaUser />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Nombre de usuario
              </TextUI>
            </Flex>
          </Link>

          <Link to="/">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#F4A261">
                <GoKey />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Contraseña
              </TextUI>
            </Flex>
          </Link>
        </Box>

        <TextUI fontSize="1.125rem" color="primary">
          Términos y condiciones
        </TextUI>

        <Box mt="0.75rem">
          <Link to="/">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#E9C46A">
                <GiInjustice />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Política de Privacidad
              </TextUI>
            </Flex>
          </Link>

          <Link to="/">
            <Flex alignItems="center">
              <BoxColor bgColor="#E76F51">
                <HiDocumentText />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Términos y Condiciones
              </TextUI>
            </Flex>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default Profile
