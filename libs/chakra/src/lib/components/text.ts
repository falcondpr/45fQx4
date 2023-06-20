import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const base = defineStyle({
  fontSize: '16px',
  color: 'brand.700',
});

export const textTheme = defineStyleConfig({
  variants: { base },
});
