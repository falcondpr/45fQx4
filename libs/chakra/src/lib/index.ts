import { extendTheme } from '@chakra-ui/react';

import { fonts } from './fonts';
import { colors } from './colors';
import { config } from './config';
import { buttonTheme } from './components/button';
import { textTheme } from './components/text';

const theme = extendTheme({
  fonts,
  colors,
  config,
  components: {
    Button: buttonTheme,
    Text: textTheme,
  },
});

export default theme;
