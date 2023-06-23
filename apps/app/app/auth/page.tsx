'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Auth() {
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
        bgPos="bottom"
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
          p="32px 20px"
          bottom="0"
          position="fixed"
          zIndex="10"
          gridTemplateRows="repeat(3, min-content)"
          alignContent="center"
        >
          <Heading variant="base">
            Empieza a comprar y vender de forma segura
          </Heading>
          <Text variant="base" mt="10px">
            Se prima la experiencia del usuario y la seguridad usando nuestro
            sitio
          </Text>

          <VStack spacing={4} flexDir="row" marginTop="16px">
            <Button
              fontSize="18px"
              variant="base"
              onClick={() => router.push('/register/principal')}
            >
              Crear cuenta
            </Button>
            <Button
              fontSize="18px"
              variant="outline"
              onClick={() => router.push('/login')}
            >
              Inicia sesion
            </Button>
          </VStack>
        </Grid>
      </Box>
    </Grid>
  );
}
