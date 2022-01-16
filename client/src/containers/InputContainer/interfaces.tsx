import { ChangeEvent, MouseEventHandler } from 'react';

export interface inputContainerProps {
  value: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit?: MouseEventHandler<HTMLButtonElement> | undefined;
}
