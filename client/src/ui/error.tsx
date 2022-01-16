import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled(Grid).attrs({
  container: true,
  alignItems: 'center',
  justifyContent: 'center'
})`
  display: flex;
`;

export const Main = styled.main`
  display: flex;
  flex-grow: 1;

  justify-content: center;
`;
