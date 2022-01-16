import { ChangeEvent } from 'react';

export interface listProps {
  itemList: taskProps[];
  removeTask(id: number): void;
  completeTask(id: number, e: ChangeEvent<HTMLTextAreaElement>): Promise<void>;
}

export interface taskProps {
  id: number;
  title: string;
  date: number;
  status: string;
}
