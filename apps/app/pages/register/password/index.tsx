import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import * as yup from 'yup';
import { Box, Grid, Heading, Text, Link, Flex, Image } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Input, Button } from '@sura/ui';
import DotActive from '../../../components/auth/DotActive';

const registerValidationSchema = yup.object().shape({
  password: yup.string().required('La contrasena es obligatorio'),
  confirmPassword: yup.string().required('Confirme la contrasena'),
});

export default function Register() {
  const router = useRouter();

  // eslint-disable-next-line
  const handleRegisterUser = (values: any): void => {
    router.push('/');
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
          width="100%"
          alignContent="flex-end"
          gridTemplateRows="repeat(2, min-content)"
          position="relative"
          className="header-register"
        >
          <Box w="full" h="160px" position="absolute" top="0" left="0">
            <Image
              as={LazyLoadImage}
              src="/images/bg-register-gender.jpg"
              w="full"
              h="full"
              alt=""
              effect="blur"
              objectFit="cover"
            />
          </Box>

          <Box
            position="absolute"
            bottom="0"
            right="0"
            w="full"
            h="full"
            bgColor="white"
            opacity="0.8"
          />

          <Box position="relative" p="20px">
            <Heading variant="base" fontSize="28px">
              Datos personales
            </Heading>
            <Text>Introduce una nueva contrasena</Text>
          </Box>
        </Grid>

        <Box p="20px">
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            // eslint-disable-next-line
            onSubmit={(values: any) => handleRegisterUser(values)}
          >
            {({ handleBlur, handleChange, values, handleSubmit, errors }) => (
              <Box as="form" onSubmit={handleSubmit}>
                <Box>
                  <Input
                    label="contrasena"
                    type="password"
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && (
                    <Text fontSize="14px" mt="-12px" mb="12px" color="red.400">
                      {errors.password as string}
                    </Text>
                  )}
                </Box>

                <Box>
                  <Input
                    label="confirmar contrasena"
                    value={values.confirmPassword}
                    type="password"
                    onChange={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                  />
                  {errors.confirmPassword && (
                    <Text fontSize="14px" mt="-12px" mb="12px" color="red.400">
                      {errors.confirmPassword as string}
                    </Text>
                  )}
                </Box>

                <Box
                  position="fixed"
                  w="calc(100% - 40px)"
                  left="20px"
                  bottom="30px"
                >
                  <DotActive value={5} />

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
