import { extendTheme } from '@chakra-ui/react';

import { fonts } from './fonts';
import { colors } from './colors';
import { config } from './config';

const theme = extendTheme({
  fonts,
  colors,
  config,
});

export default theme;
