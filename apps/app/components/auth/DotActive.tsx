import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export default function DotActive({ value }: { value: number }) {
  return (
    <Flex gap="10px" justifyContent="center">
      <Box
        bgColor={value === 1 ? 'brand.900' : 'brand.100'}
        w="10px"
        h="10px"
        rounded="full"
      />
      <Box
        bgColor={value === 2 ? 'brand.900' : 'brand.100'}
        w="10px"
        h="10px"
        rounded="full"
      />
      <Box
        bgColor={value === 3 ? 'brand.900' : 'brand.100'}
        w="10px"
        h="10px"
        rounded="full"
      />
      <Box
        bgColor={value === 4 ? 'brand.900' : 'brand.100'}
        w="10px"
        h="10px"
        rounded="full"
      />
      <Box
        bgColor={value === 5 ? 'brand.900' : 'brand.100'}
        w="10px"
        h="10px"
        rounded="full"
      />
    </Flex>
  );
}
