import React from 'react';
import ItemTask from '../ItemTask/ItemTask';
import styled from 'styled-components';
import { taskProps, listProps } from './interfaces';
import { Grid as MaterialGrid } from '@material-ui/core';

const TodoList = ({ itemList, removeTask, completeTask }: listProps) => {
  return (
    <List data-testid={'todoList'}>
      {itemList.map((task: taskProps, id: number) => (
        <ItemTask
          key={id}
          task={task}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      ))}
    </List>
  );
};

const List = styled(MaterialGrid).attrs({ container: true })`
  height: 25px;
  width: 90%;
  align-items: center;
  padding: 30px 120px;
`;

export default TodoList;
