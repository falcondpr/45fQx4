import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import * as yup from 'yup';
import { Box, Grid, Heading, Text, Link, Flex } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { Input, Button } from '@sura/ui';
import DotActive from '../../../components/auth/DotActive';

const registerValidationSchema = yup.object().shape({
  fullname: yup.string().required('El nombre es obligatorio'),
});

export default function Register() {
  const router = useRouter();

  // eslint-disable-next-line
  const handleRegisterUser = (values: any): void => {
    router.push('/register/username');
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
          height="200px"
          bgSize="cover"
          bgPos="center"
          width="100%"
          bgImage="url('/images/bg-register.png')"
          p="20px"
          alignContent="flex-end"
          gridTemplateRows="repeat(2, min-content)"
        >
          <Heading variant="base">Bienvenido!</Heading>
          <Text>
            Si aun no tienes
            <br /> una cuenta debes registrarte
          </Text>
        </Grid>

        <Box p="20px">
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              fullname: '',
            }}
            // eslint-disable-next-line
            onSubmit={(values: any) => handleRegisterUser(values)}
          >
            {({ handleBlur, handleChange, values, handleSubmit, errors }) => (
              <Box as="form" onSubmit={handleSubmit}>
                <Box>
                  <Input
                    label="nombre completo"
                    value={values.fullname}
                    onChange={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                  />
                  {errors.fullname && (
                    <Text fontSize="14px" mt="-12px" mb="12px" color="red.400">
                      {errors.fullname as string}
                    </Text>
                  )}
                </Box>

                <DotActive value={2} />

                <Flex gap="16px" mt="20px">
                  <Button
                    type="button"
                    flex="1"
                    variant="outline"
                    fontSize="18px"
                    onClick={() => router.back()}
                  >
                    Volver
                  </Button>
                  <Button type="submit" flex="1" fontSize="18px">
                    Siguiente
                  </Button>
                </Flex>
              </Box>
            )}
          </Formik>
        </Box>
      </Box>

      <Text pb="32px" color="brand.700" textAlign="center">
        Ya tienes una cuenta?{' '}
        <Link href="/login" as={NextLink} textDecor="underline">
          Inicia sesion
        </Link>
      </Text>
    </Flex>
  );
}
