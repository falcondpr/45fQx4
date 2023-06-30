import { Button as ButtonUI } from '@sura/ui';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@sura/chakra';

export function Button({ ...rest }) {
  
  return (
    <ChakraProvider theme={theme}>
      <ButtonUI {...rest}>
        {rest.children}
      </ButtonUI>
    </ChakraProvider>
  );
}
