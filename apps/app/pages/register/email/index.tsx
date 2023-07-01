import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import * as yup from 'yup';
import { Box, Grid, Heading, Text, Link, Flex } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { Input, Button } from '@sura/ui';
import DotActive from '../../../components/auth/DotActive';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Debe ser un correo válido')
    .required('El correo es obligatorio'),
});

export default function Register() {
  const router = useRouter();

  // eslint-disable-next-line
  const handleRegisterUser = (values: any): void => {
    router.push('/register/fullname');
    console.log({ values });
  };

  const [height, setHeight] = useState<number | string>(0);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    setHeight(innerHeight);
  }, []);

  return (
    <Flex flexDir="column" height={height} justifyContent="space-between">
      <Box>
        <Grid
          height="160px"
          bgSize="cover"
          bgPos="center"
          width="100%"
          bgImage="url('/images/bg-register-email.jpg')"
          p="20px"
          alignContent="flex-end"
          gridTemplateRows="repeat(2, min-content)"
          position="relative"
        >
          <Box
            position="absolute"
            bottom="0"
            right="0"
            w="full"
            h="full"
            bgColor="white"
            opacity="0.5"
          />

          <Box position="relative">
            <Heading variant="base" fontSize="28px">
              Datos personales
            </Heading>
            <Text>Introduce tu correo electrónico aquí</Text>
          </Box>
        </Grid>

        <Box p="20px">
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              email: '',
            }}
            // eslint-disable-next-line
            onSubmit={(values: any) => handleRegisterUser(values)}
          >
            {({ handleBlur, handleChange, values, handleSubmit, errors }) => (
              <Box as="form" onSubmit={handleSubmit}>
                <Box>
                  <Input
                    label="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && (
                    <Text fontSize="14px" mt="-12px" mb="12px" color="red.400">
                      {errors.email as string}
                    </Text>
                  )}
                </Box>

                <Box
                  position="fixed"
                  w="calc(100% - 40px)"
                  left="20px"
                  bottom="30px"
                >
                  <DotActive value={1} />

                  <Flex gap="16px" mt="20px">
                    <Button
                      type="button"
                      flex="1"
                      variant="base"
                      color="brand.900"
                      fontSize="18px"
                      bgColor="white"
                      shadow="none"
                      border="1px solid"
                      borderColor="brand.700"
                      onClick={() => router.back()}
                    >
                      Volver
                    </Button>
                    <Button type="submit" flex="1" fontSize="18px">
                      Siguiente
                    </Button>
                  </Flex>

                  <Text pt="20px" color="brand.700" textAlign="center">
                    Ya tienes una cuenta?{' '}
                    <Link href="/login" as={NextLink} textDecor="underline">
                      Inicia sesion
                    </Link>
                  </Text>
                </Box>
              </Box>
            )}
          </Formik>
        </Box>
      </Box>
    </Flex>
  );
}
