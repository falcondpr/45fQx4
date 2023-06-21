'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import * as yup from 'yup';
import { Box, Button, Grid, Heading, Text, Link } from '@chakra-ui/react';
import { Formik } from 'formik';

import { Input } from '@sura/ui';
// import { IUser } from '@sura/interfaces';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Debe ser un email válido')
    .required('El nombre es obligatorio'),
  username: yup.string().required('El nombre de usuario es obligatorio'),
  fullname: yup.string().required('El nombre es obligatorio'),
  password: yup.string().required('La contraseña es obligatorio'),
  confirmPassword: yup.string().required('Confirmar la contraseña'),
});

export default function Register() {
  const handleRegisterUser = (values: any): void => {
    console.log({ values });
  };

  const [currentForm, setCurrentForm] = useState<number>(0);
  const [sending, setSending] = useState<boolean>(false);

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
          initialValues={{
            username: '',
            email: '',
            fullname: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values: any) => handleRegisterUser(values)}
        >
          {({ handleBlur, handleChange, values, handleSubmit, errors }) => (
            <Box>
              {currentForm === 0 ? (
                <Box>
                  <Input
                    label="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && sending && (
                    <Text fontSize="14px" mt="-16px" mb="6px" color="red.400">
                      {errors.email as string}
                    </Text>
                  )}
                  <Input
                    label="username"
                    value={values.username}
                    onChange={handleChange('username')}
                    onBlur={handleBlur('username')}
                  />
                  {errors.username && sending && (
                    <Text color="red.400" fontSize="14px" mt="-16px" mb="6px">
                      {errors.username as string}
                    </Text>
                  )}
                </Box>
              ) : currentForm === 1 ? (
                <Box>
                  <Input
                    label="nombre completo"
                    value={values.fullname}
                    onChange={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                  />
                  {errors.fullname && sending && (
                    <Text color="red.400" fontSize="14px" mt="-16px" mb="6px">
                      {errors.fullname as string}
                    </Text>
                  )}
                </Box>
              ) : (
                <Box>
                  <Input
                    type="password"
                    label="contrasena"
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && sending && (
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
                  {errors.confirmPassword && sending && (
                    <Text color="red.400" fontSize="14px" mt="-16px" mb="6px">
                      {errors.confirmPassword as string}
                    </Text>
                  )}
                </Box>
              )}

              <Button
                marginTop="10px"
                variant="base"
                onClick={() => {
                  if (currentForm < 2) {
                    setCurrentForm((prev: number) => prev + 1);
                    return;
                  }

                  setSending(true);
                  handleSubmit();
                }}
              >
                {currentForm < 2 ? 'Siguiente' : 'Crear cuenta'}
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
