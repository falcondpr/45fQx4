import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const base = defineStyle({
  height: '58px',
  bgColor: 'brand.900',
  borderRadius: '6px',
  color: 'white',
  width: '100%',

  _hover: {
    opacity: 0.95,
  },

  _focusWithin: {
    outline: '2px solid',
    outlineColor: 'rgba(0,0,0,0.3)',
    outlineOffset: '2px',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { base },
});
