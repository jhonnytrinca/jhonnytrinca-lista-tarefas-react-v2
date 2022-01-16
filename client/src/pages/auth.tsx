import React, { useContext, useCallback, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Box,
  Typography,
  TextField as MaterialTextField,
  Button as MaterialButton
} from '@material-ui/core';
import LockIcon from '@mui/icons-material/Lock';
import AuthContext from '../contexts/auth';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e: ChangeEvent<HTMLTextAreaElement>) {
    setEmail(e.target.value);
  }

  function handlePass(e: ChangeEvent<HTMLTextAreaElement>) {
    setPassword(e.target.value);
  }

  const handleAuthSubmit = useCallback(() => {
    const token = btoa(email);
    localStorage.setItem('token', JSON.stringify(token));
    signIn();
  }, [signIn, email]);

  return (
    <>
      <MainBox>
        <Avatar sx={{ width: 64, height: 64, m: 2, bgcolor: 'secondary.main' }}>
          <LockIcon fontSize='large' />
        </Avatar>
        <Typography variant='h4'>Entrar</Typography>
        <InnerBox>
          <TextField
            label='Email'
            name='email'
            autoFocus
            value={email}
            onChange={handleEmail}
          />
          <TextField
            label='Senha'
            name='senha'
            type='password'
            value={password}
            onChange={handlePass}
          />
          <Button onClick={handleAuthSubmit}>Entrar</Button>
        </InnerBox>
      </MainBox>
    </>
  );
};

const MainBox = styled(Box).attrs({
  sx: { mt: 8 }
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerBox = styled(Box).attrs({
  component: 'form',
  noValidete: true,
  sx: { mt: 4 }
})``;

const TextField = styled(MaterialTextField).attrs({
  margin: 'normal',
  required: true,
  fullWidth: true
})``;

const Button = styled(MaterialButton).attrs({
  fullWidth: true,
  variant: 'contained',
  sx: { mt: 5, mb: 4 },
  style: { fontSize: '18px' }
})`
  height: 50px;
`;

export default Login;
