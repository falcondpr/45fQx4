'use client';

import React from 'react';
import { Box, Link as LinkChakraUI } from '@chakra-ui/react';
import Link from 'next/link';

export default function Auth() {
  return (
    <Box color="brand.100">
      <LinkChakraUI as={Link} fontSize="32px" href="/">
        Inicio
      </LinkChakraUI>
    </Box>
  );
}
