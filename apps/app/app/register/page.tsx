'use client';

import React from 'react';
import NextLink from 'next/link';
import * as yup from 'yup';
import { Box, Button, Grid, Heading, Text, Link } from '@chakra-ui/react';
import { Formik } from 'formik';

import { Input } from '@sura/ui';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Debe ser un email válido')
    .required('El nombre es obligatorio'),
  password: yup.string().required('La contraseña es obligatorio'),
  confirmPassword: yup.string().required('Confirmar la contraseña'),
});

export default function Register() {
  const handleRegisterUser = (values: any): void => {
    console.log({ values });
  };

  return (
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
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          onSubmit={(values: any) => handleRegisterUser(values)}
        >
          {({ handleBlur, handleChange, values, handleSubmit, errors }) => (
            <Box>
              <Input
                label="email"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && (
                <Text fontSize="14px" mt="-16px" mb="6px" color="red.400">
                  {errors.email as string}
                </Text>
              )}
              <Input
                type="password"
                label="contraseña"
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {errors.password && (
                <Text color="red.400" fontSize="14px" mt="-16px" mb="6px">
                  {errors.password as string}
                </Text>
              )}
              <Input
                type="password"
                label="confirmar contraseña"
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                onBlur={handleBlur('password')}
              />
              {errors.confirmPassword && (
                <Text color="red.400" fontSize="14px" mt="-16px" mb="6px">
                  {errors.confirmPassword as string}
                </Text>
              )}
              <Button
                marginTop="10px"
                variant="base"
                onClick={() => handleSubmit()}
              >
                Crear cuenta
              </Button>

              <Text color="brand.700" marginTop="12px" textAlign="center">
                Ya tienes una cuenta?{' '}
                <Link href="/login" as={NextLink} textDecor="underline">
                  Inicia sesion
                </Link>
              </Text>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
