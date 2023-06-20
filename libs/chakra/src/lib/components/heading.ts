import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const base = defineStyle({
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'brand.900',
});

export const headingTheme = defineStyleConfig({
  variants: { base },
});
