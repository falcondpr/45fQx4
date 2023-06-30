import { ButtonProps, Button as ButtonUI, Flex, Switch, Text, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface IButtonUI extends ButtonProps {
  story?: boolean;
}

export default function Button({ children, ...rest }: IButtonUI) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (colorMode === 'dark') {
      toggleColorMode();
      return;
    }
  }, []);

  useEffect(() => {
    setIsDarkMode(colorMode === 'dark' ? true : false);
  }, [colorMode]);

  return (
    <>
      <ButtonUI variant="base" {...rest}>
        {children}
      </ButtonUI>

      {rest.story && (
        <Flex mt="20px" gap="10px" alignItems="center">
          <Switch
            colorScheme="teal"
            defaultChecked={isDarkMode}
            value={colorMode}
            onChange={toggleColorMode}
          />
          <Text>Dark Mode</Text>
        </Flex>
      )}
    </>
  );
}
