'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();

  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    setHeight(innerHeight);
  }, []);

  return (
    <Box h={`${height}px`} overflow="hidden">
      <Box
        height="70vh"
        bgColor="pink.100"
        position="absolute"
        top="0"
        w="full"
        left="0"
        bgImage="url('/images/bg-auth.png')"
        bgSize="cover"
        bgPos="center"
      />

      <Grid
        p="34px 20px"
        bgColor="white"
        roundedTopLeft="30px"
        roundedTopRight="30px"
        marginTop="-32px"
        bottom="0"
        position="absolute"
        zIndex="10"
      >
        <Heading variant="base">
          Empieza a comprar y vender de forma segura
        </Heading>
        <Text variant="base" mt="10px">
          Se prima la experiencia del usuario y la seguridad usando nuestro
          sitio
        </Text>

        <VStack spacing={4} flexDir="row" marginTop="16px">
          <Button variant="base" onClick={() => router.push('/register')}>
            Crear cuenta
          </Button>
          <Button variant="outline">Inicia sesion</Button>
        </VStack>
      </Grid>
    </Box>
  );
}
