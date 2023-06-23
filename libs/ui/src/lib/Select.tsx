import { Select as SelectChakraUI, SelectProps } from '@chakra-ui/react';

export default function Select({ children, ...rest }: SelectProps) {
  return (
    <SelectChakraUI
      display="block"
      mb="20px"
      rounded="6px"
      borderColor="brand.700"
      height="58px"
      {...rest}
    >
      {children}
    </SelectChakraUI>
  );
}
