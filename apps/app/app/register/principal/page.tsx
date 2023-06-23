'use client';

import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

// bg-auth-principal

export default function PrincipalRegister() {
  const router = useRouter();

  const [height, setHeight] = useState<number | string>(768);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    setHeight(innerHeight);
  }, []);

  return (
    <Flex flexDir="column" height={height} overflow="hidden">
      <Box position="relative" w="full" height="72vh">
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          zIndex="10"
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), url('/images/bg-auth-principal.png'), lightgray 50% / cover no-repeat"
        />

        <Grid
          h="full"
          position="relative"
          zIndex="20"
          p="20px"
          pb="32px"
          alignContent="flex-end"
        >
          <Heading variant="base">Bienvenido!</Heading>
          <Text>
            Si aun no tienes
            <br /> una cuenta debes registrarte
          </Text>
        </Grid>
      </Box>

      <Box p="20px" position="fixed" left="0" bottom="0" w="full">
        <Button
          shadow="none"
          variant="base"
          bgColor="white"
          border="1px solid"
          borderColor="brand.700"
          onClick={() => router.push('/register')}
        >
          <Image src="/icons/mail-auth.svg" alt="" w="36px" h="36px" />
          <Text ml="10px" fontSize="16px" color="brand.900">
            Registrarse con email
          </Text>
        </Button>

        <Button
          mt="16px"
          shadow="none"
          variant="base"
          bgColor="white"
          border="1px solid"
          borderColor="brand.700"
        >
          <Image src="/icons/google-auth.svg" alt="" w="36px" h="36px" />
          <Text ml="10px" fontSize="16px" color="brand.900">
            Registrarse con google
          </Text>
        </Button>

        <Text
          color="brand.700"
          marginTop="20px"
          marginBottom="10px"
          textAlign="center"
        >
          Ya tienes una cuenta?{' '}
          <Link href="/login" as={NextLink} textDecor="underline">
            Inicia sesion
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}
