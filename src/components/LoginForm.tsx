import React, { Dispatch, SetStateAction, useState } from 'react';

import { Button, TextField, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { appColors } from '../constants';
import { FormDTO } from '../dto';

type handleEventProp = {
  setIsLoggingIn: Dispatch<SetStateAction<boolean>>;
};

export const LoginForm = (props: handleEventProp) => {
  const handleSubmit = (values: FormDTO) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => handleSubmit(values)
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: '450px',
          padding: '30px 50px',
          borderRadius: '10px',
          boxShadow: '1px 1px 20px rgba(0, 0, 0, .05)',
          backgroundColor: appColors.white,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <LoginText variant="h4">Login</LoginText>
        <FieldContainer>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </FieldContainer>
        <ButtonContainer>
          <Button variant="contained" sx={{ padding: '10px 20px' }} type="submit">
            Login
          </Button>
        </ButtonContainer>
        <FooterText variant="body2">
          Don't have an account?{' '}
          <span style={RegisterLink} onClick={() => props.setIsLoggingIn((value) => !value)}>
            Register here
          </span>
        </FooterText>
      </form>
    </>
  );
};

const FormContainer = styled(Box)(() => ({
  width: '450px',
  padding: '30px 50px',
  borderRadius: '10px',
  boxShadow: '1px 1px 20px rgba(0, 0, 0, .05)',
  backgroundColor: appColors.white,
  // border: '1px solid black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}));

const FieldContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '150px'
}));

const LoginText = styled(Typography)(() => ({
  textAlign: 'center'
}));

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 10
}));

const FooterText = styled(Typography)(() => ({
  marginTop: 10,
  textAlign: 'center',
  color: 'gray'
}));

const RegisterLink = {
  textDecoration: 'underline',
  color: appColors.backgroundRed,
  cursor: 'pointer'
};
