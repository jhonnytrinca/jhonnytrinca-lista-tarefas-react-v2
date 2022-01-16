import React from 'react';
import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';
import ErrorIcon from '@mui/icons-material/Error';
import { Main, Container } from '../ui';

const NotFound = () => {
  return (
    <Main>
      <Container>
        <Grid item textAlign={'center'}>
          <MaterialErrorIcon />
          <Typography variant={'h2'} padding={2}>
            Conteúdo não encontrado
          </Typography>
          <Typography variant={'h5'}>
            O caminho selecionado não é válido.
          </Typography>
        </Grid>
      </Container>
    </Main>
  );
};

const MaterialErrorIcon = styled(ErrorIcon)`
  transform: scale(3);
  margin: 20px;
`;

export default NotFound;
