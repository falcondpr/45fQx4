'use client';

import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function PrincipalRegister() {
  const router = useRouter();

  const [height, setHeight] = useState<number | string>(0);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    setHeight(innerHeight);
  }, []);

  return (
    <Grid
      gridTemplateRows="3fr 1fr"
      flexDir="column"
      height={height}
      overflow="hidden"
    >
      <Box
        bgImage="url('/images/bg-auth-principal.png')"
        bgSize="cover"
        position="relative"
        w="full"
        height="100%"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          zIndex="10"
          bg="linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%)"
        />

        <Grid
          h="full"
          position="relative"
          zIndex="20"
          p="0 20px"
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

      <Box p="20px" left="0" bottom="0" w="full" bgColor="white">
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
    </Grid>
  );
}
