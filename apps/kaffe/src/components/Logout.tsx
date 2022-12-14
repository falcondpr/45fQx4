import React from 'react'
import { Box, Flex, Grid, Text, Button } from '@chakra-ui/react'

interface LogoutProps {
  setShowLogoutModal: (value: boolean) => void
}

const Logout: React.FC<LogoutProps> = ({ setShowLogoutModal }) => {
  return (
    <Flex
      h="100vh"
      overflowY="hidden"
      position="absolute"
      top="0"
      left="0"
      w="full"
      zIndex="100"
    >
      <Box
        position="absolute"
        top="0"
        bgPos="center top"
        bgSize="cover"
        left="0"
        w="full"
        bgImage="url('https://bit.ly/3YoN1uj')"
        h="80vh"
      ></Box>
      <Box
        py="2.375rem"
        px="1.25rem"
        position="absolute"
        bottom="0"
        left="0"
        bgColor="white"
        borderTopLeftRadius="2.5rem"
        borderTopRightRadius="2.5rem"
      >
        <Text
          fontWeight="semibold"
          fontSize="2.25rem"
          color="primary"
          lineHeight="2.5rem"
          mb="1.25rem"
        >
          Deseas cerrar sesión?
        </Text>

        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
          <Button
            bgColor="primary"
            color="white"
            h="3.2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="2px"
          >
            Si, cerrar
          </Button>

          <Button
            bgColor="white"
            color="primary"
            h="3.2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="2px"
            onClick={() => setShowLogoutModal(false)}
          >
            No
          </Button>
        </Grid>
      </Box>
    </Flex>
  )
}

export default Logout
