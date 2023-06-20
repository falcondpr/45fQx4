import type { DeepPartial, Theme } from '@chakra-ui/react';

const extendColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> =
  {
    brand: {
      100: '#d9d9d9',
      200: '',
      900: '#333',
    },
  };

const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendColors,
};
