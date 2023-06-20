import {
  Text,
  InputProps,
  Box,
  Input as InputChakraUI,
} from '@chakra-ui/react';

interface IInput extends InputProps {
  label?: string;
}

export default function Input({ label, ...rest }: IInput) {
  return (
    <Box mb="20px">
      <Text
        fontSize="14px"
        color="brand.200"
        display={label ? 'block' : 'none'}
        textTransform="lowercase"
        mb="3px"
      >
        {label}
      </Text>
      <InputChakraUI
        height="58px"
        rounded="6px"
        borderColor="brand.200"
        color="brand.900"
        _focusVisible={{
          borderColor: 'brand.100',
        }}
        _focus={{
          outlineColor: 'brand.200',
        }}
        {...rest}
      />
    </Box>
  );
}
