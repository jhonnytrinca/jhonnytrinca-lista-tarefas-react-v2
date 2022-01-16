import React, { ChangeEvent, useEffect, useState } from 'react';
import { props, MTaskProps } from './interfaces';
import styled from 'styled-components';
import {
  Button,
  ListItem as MaterialListItem,
  ListItemText as MaterialListItemText
} from '@material-ui/core';

const ItemTask = (
  { task, removeTask, completeTask }: props,
  e: ChangeEvent<HTMLInputElement>
) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (task.status === 'completed') {
      setChecked(true);
    }
  }, [task]);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    completeTask(task.id, e as any);
  };

  const handleClick = () => {
    removeTask(task.id);
  };

  return (
    <ListItem key={task.id} data-testid={'todo'}>
      <Checkbox checked={checked} onChange={handleChecked} />
      <Task checked={checked}>{task.title}</Task>
      <RemoveButton
        onClick={handleClick}
        color='secondary'
        data-testid={'remButton'}
      >
        Remover
      </RemoveButton>
    </ListItem>
  );
};

const Task = styled(MaterialListItemText)<MTaskProps>(
  ({ checked }) => `
    color: ${checked ? 'red' : 'initial'};   
    text-decoration: ${checked ? 'line-through' : 'initial'};
    display: flex;
    align-items: center;
    flex: 70%;
    margin: 10px;
    `
);

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
`;

const ListItem = styled(MaterialListItem)``;

const RemoveButton = styled(Button).attrs({ variant: 'contained' })`
  cursor: pointer;
`;

export default ItemTask;
