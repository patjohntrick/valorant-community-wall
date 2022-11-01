import React from 'react';

import { Button, TextField, Typography, Box, Container } from '@mui/material';
import styled from '@emotion/styled';

export const Login = () => {
  return (
    <Containers>
      <FormContainer>
        <LoginText variant="h4">Login</LoginText>
        <FieldContainer>
          <TextField id="outlined-required" label="Email" type="email" />
          <TextField id="outlined-required" label="Password" type="password" />
        </FieldContainer>
        <ButtonContainer>
          <Button variant="contained" sx={{ padding: '10px 20px' }}>
            Login
          </Button>
        </ButtonContainer>
        <FooterText variant="body2">
          Don't have an account? <span style={RegisterLink}>Register here</span>
        </FooterText>
      </FormContainer>
    </Containers>
  );
};

const Containers = styled(Container)(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const FormContainer = styled(Box)(() => ({
  width: '320px',
  padding: '30px 50px',
  borderRadius: '10px',
  boxShadow: '1px 1px 20px rgba(0, 0, 0, .05)'
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
  color: 'blue',
  cursor: 'pointer'
};
