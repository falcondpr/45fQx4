import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const base = defineStyle({
  height: '60px',
  bgColor: 'brand.900',
  borderRadius: '6px',
  color: 'white',
  width: '100%',
  fontSize: '20px',
  fontWeight: 'medium',
  boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',

  _dark: {
    backgroundColor: 'white',
    color: 'brand.900',

    _focusWithin: {
      outline: '2px solid',
      outlineColor: 'white',
      outlineOffset: '2px',
    },
  },

  _hover: {
    opacity: 0.95,
  },

  _focusWithin: {
    outline: '2px solid',
    outlineColor: 'rgba(0,0,0,0.3)',
    outlineOffset: '2px',
  },
});

const outline = defineStyle({
  ...base,
  bgColor: 'white',
  border: '1px solid',
  borderColor: 'brand.900',
  color: 'brand.900',

  _dark: {
    borderColor: 'white',
    backgroundColor: 'brand.900',
    color: 'white',

    _focusWithin: {
      outline: '2px solid',
      outlineColor: 'white',
      outlineOffset: '2px',
    },
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { base, outline },
});
