import { extendTheme, color } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  ...color,
  primary: '#333333',
  'light-gray': '#999999',
  'border-color': '#bebebe',
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const fonts = {
  heading: 'Poppins, sans-serif',
  body: 'Poppins, sans-serif',
}

export const theme = extendTheme({ colors, fonts })
