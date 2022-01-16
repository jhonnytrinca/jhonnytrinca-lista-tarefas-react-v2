import React from 'react';
import styled from 'styled-components';
import { inputContainerProps } from './interfaces';
import {
  Typography,
  TextField as MaterialTextField,
  Button
} from '@material-ui/core';

const InputContainer = ({
  handleChange,
  handleSubmit,
  value
}: inputContainerProps) => {
  return (
    <Header>
      <Title variant={'h2'}> Lista de tarefas </Title>
      <Container>
        <TextField
          value={value}
          label='Insira sua tarefa'
          onChange={handleChange}
          inputProps={{ 'data-testid': 'taskField' }}
        />
        <AddButton
          type='submit'
          onClick={handleSubmit}
          color='primary'
          data-testid={'addButton'}
        >
          Adicionar
        </AddButton>
      </Container>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography).attrs({ variant: 'h2' })`
  font-family: 'Nunito', sans-serif;
  text-align: center;
  color: rgb(7, 7, 78);
  padding: 20px;
`;

const TextField = styled(MaterialTextField).attrs({
  type: 'input'
})`
  width: 85%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 120px;
`;

const AddButton = styled(Button).attrs({ variant: 'contained' })`
  cursor: pointer;
`;

export default InputContainer;
