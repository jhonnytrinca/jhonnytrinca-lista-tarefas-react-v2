import { ChangeEvent } from 'react';
import { taskProps } from '../TodoList/interfaces';
import { ListItemProps } from '@mui/material';

export interface props {
  task: taskProps;
  removeTask(id: number): void;
  completeTask(id: number, e: ChangeEvent<HTMLTextAreaElement>): Promise<void>;
}

export interface MTaskProps extends ListItemProps {
  checked?: boolean;
}
