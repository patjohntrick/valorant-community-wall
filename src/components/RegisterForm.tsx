import React, { Dispatch, SetStateAction } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, TextField, Button, FormControl } from '@mui/material';
import styled from '@emotion/styled';

import { appColors, Messages } from '../constants';
import { FormDTO } from '../dto';
import { register } from '../api/UserApi';

type RegisterProps = {
  setIsLoggingIn: Dispatch<SetStateAction<boolean>>;
};

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required(Messages.REQUIRED_USERNAME),
  email: Yup.string().required(Messages.REQUIRED_EMAIL),
  password: Yup.string().required(Messages.REQUIRED_PASSWORD),
  confirmPassword: Yup.string().required(Messages.ERROR_CONFIRM_PASSWORD)
});

export const RegisterForm = (props: RegisterProps) => {
  const handleSubmit = async (values: FormDTO) => {
    const { response, data } = await register(values);
    console.log(response, data);
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
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
        <LoginText variant="h4">Register</LoginText>
        <FieldContainer>
          <StyledTextField
            id="username"
            label="Username"
            type="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.username && formik.errors.username}
            error={Boolean(formik.errors.username) && formik.touched.username}
            value={formik.values.username}
          />
          <StyledTextField
            id="email"
            label="Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            error={Boolean(formik.errors.email) && formik.touched.email}
            value={formik.values.email}
          />
          <StyledTextField
            id="password"
            label="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.password && formik.errors.password}
            error={Boolean(formik.errors.password) && formik.touched.password}
            value={formik.values.password}
          />
          <StyledTextField
            id="confirmPassword"
            label="Confirm password"
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            error={Boolean(formik.errors.password) && formik.touched.password}
          />
        </FieldContainer>
        <ButtonContainer>
          <Button variant="contained" sx={{ padding: '10px 20px' }} type="submit" color="error">
            Register
          </Button>
        </ButtonContainer>
        <FooterText variant="body2">
          Already have an account?{' '}
          <span style={RegisterLink} onClick={() => props.setIsLoggingIn((value) => !value)}>
            Login here
          </span>
        </FooterText>
      </form>
    </>
  );
};

const FormContainer = styled(FormControl)(() => ({
  width: '450px',
  padding: '30px 50px',
  borderRadius: '10px',
  boxShadow: '1px 1px 20px rgba(0, 0, 0, .05)',
  backgroundColor: appColors.white,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}));

const FieldContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
  //   height: '150px'
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

const StyledTextField = styled(TextField)(() => ({
  margin: '10px 0'
}));
