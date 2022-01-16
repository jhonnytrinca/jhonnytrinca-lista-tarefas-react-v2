import React from 'react';
import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';
import NoEncryptionGmailerrorredIcon from '@mui/icons-material/NoEncryptionGmailerrorred';
import { Main, Container } from '../ui';

const NotAuhorized = () => {
  return (
    <Main>
      <Container>
        <Grid item padding={2} textAlign={'center'}>
          <MaterialErrorIcon />
          <Typography variant={'h2'}>Acesso não autorizado</Typography>
          <Return>
            <a href='/auth'>Clique Aqui</a> para retornar a página de
            autenticação e acessar a aplicação
          </Return>
        </Grid>
        <Grid item></Grid>
      </Container>
    </Main>
  );
};

const MaterialErrorIcon = styled(NoEncryptionGmailerrorredIcon)`
  transform: scale(3);
  margin: 20px;
`;

const Return = styled(Typography).attrs({ variant: 'h5' })`
  padding: 20px;
  & a {
    text-decoration: none;
  }
`;

export default NotAuhorized;
