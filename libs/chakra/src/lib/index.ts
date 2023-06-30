import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { fonts } from './fonts';
import { colors } from './colors';
import { config } from './config';

import { buttonTheme } from './components/button';
import { textTheme } from './components/text';
import { headingTheme } from './components/heading';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      backgroundColor: mode('white', '#333')(props),
    },
  }),
};

const theme = extendTheme({
  styles,
  fonts,
  colors,
  config,
  components: {
    Button: buttonTheme,
    Text: textTheme,
    Heading: headingTheme,
  },
});

export default theme;
