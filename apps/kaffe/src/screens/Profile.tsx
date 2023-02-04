import React, { useState } from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import { FaAngleLeft, FaUser } from 'react-icons/fa'
import { SiMaildotru } from 'react-icons/si'
import { IoShirtSharp } from 'react-icons/io5'
import { GiInjustice } from 'react-icons/gi'
import { BsPatchCheckFill, BsThreeDotsVertical } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { GoKey } from 'react-icons/go'
import { MdLocalGroceryStore } from 'react-icons/md'

import Layout from '../layout'
import { BoxColor, TextUI } from '../ui'
import Logout from '../components/Logout'
import ProfileAvatar from '../assets/avatar.svg'
import { UserContext } from '../context/UserContext'
import { useQuery } from '@tanstack/react-query'
import { GET_USER } from '../utils/user'
import { UserIProps } from '../interfaces/user'

const Profile: React.FC = () => {
  const { user: userContext } = React.useContext(UserContext)
  const navigate = useNavigate()

  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false)

  const { data: dataUserFetch } = useQuery(['user', userContext?.id], () =>
    GET_USER(userContext?.id),
  )
  const user: UserIProps = dataUserFetch?.data

  return showLogoutModal ? (
    <Logout setShowLogoutModal={setShowLogoutModal} />
  ) : (
    <Layout>
      {/* Banner */}
      <Box position="relative" h="9rem">
        <Image
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          objectFit="cover"
          fallbackSrc="../assets/fallback-image.png"
          src="https://bit.ly/3uKlINg"
          alt="Banner of profile user"
        />
        <Button
          position="absolute"
          top="1.25rem"
          right="1.25rem"
          // fontSize="1.1rem"
          w="2.85rem"
          bgColor="white"
          rounded="2px"
          h="2.85rem"
          fontSize="1.2rem"
          color="primary"
          p="0.75rem"
          border="1px solid"
          borderColor="primary"
          onClick={() => setShowLogoutModal(true)}
        >
          <BsThreeDotsVertical />
          {/* <FiLogOut /> */}
        </Button>

        <Button
          position="absolute"
          left="1.25rem"
          top="1.25rem"
          bgColor="primary"
          color="white"
          rounded="2px"
          w="2.85rem"
          h="2.85rem"
          fontSize="1.2rem"
          onClick={() => navigate('/')}
          px="0.9rem"
          shadow="2xl"
          zIndex="20"
        >
          <FaAngleLeft />
        </Button>
      </Box>

      {/* Profile */}
      <Box pl="1.25rem" mt="-3.125rem" position="relative" zIndex="10">
        <Image
          opacity={0.9}
          src={ProfileAvatar}
          fallbackSrc="../assets/fallback-image.png"
          alt="Profile picture"
          w="6.25rem"
          h="6.25rem"
          objectFit="cover"
          rounded="full"
          // border="3px solid"
          borderColor="white"
        />
      </Box>

      {/* Profile Info */}
      <Box p="0.3125rem 1.25rem">
        <Flex alignItems="center">
          <TextUI fontWeight="bold" color="primary">
            {user?.fullname}
          </TextUI>
          <Text color="#1DA1F2" ml="0.35rem" fontSize="1.2rem">
            <BsPatchCheckFill />
          </Text>
        </Flex>
        <TextUI fontSize="0.8rem" color="light-gray">
          @{user?.username}
        </TextUI>
      </Box>

      {/* Profile Options */}
      <Box p="0.65rem 1.25rem" pb="0">
        <TextUI fontSize="1.125rem" color="primary">
          Informacion de usuario
        </TextUI>

        <Box mt="0.75rem">
          <Link to="/posted-posts">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#023E8A">
                <IoShirtSharp />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Publicaciones subidas
              </TextUI>
            </Flex>
          </Link>

          <Link to="/saved-post">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#335C67">
                <MdLocalGroceryStore />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Publicaciones guardadas
              </TextUI>
            </Flex>
          </Link>
        </Box>

        <TextUI mt="1.5rem" fontSize="1.125rem" color="primary">
          Editar perfil
        </TextUI>

        <Box mt="0.75rem">
          <Link to="/profile/email">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#2A9D8F">
                <SiMaildotru />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Correo electronico
              </TextUI>
            </Flex>
          </Link>

          <Link to="/profile/username">
            <Flex alignItems="center" mb="1rem">
              <BoxColor bgColor="#264653">
                <FaUser />
              </BoxColor>
              <TextUI ml="0.75rem" color="secondary-gray">
                Nombre de usuario
              </TextUI>
            </Flex>
          </Link>

          <Link to="/profile/password">
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

        <TextUI mt="1.5rem" fontSize="1.125rem" color="primary">
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
