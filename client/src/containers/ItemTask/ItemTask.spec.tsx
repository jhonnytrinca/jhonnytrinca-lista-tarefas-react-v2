import ItemTask from './ItemTask';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Item Task', () => {
  const task = { id: 1, title: 'Tarefa1', date: 123, status: 'pending' };
  const removeTask = jest.fn();
  const completeTask = jest.fn();
  const itemList = [
    { id: 1, title: 'Tarefa1', date: 123, status: 'pending' },
    { id: 2, title: 'Tarefa2', date: 234, status: 'pending' }
  ];

  test('Botão Remover deve estar visível', () => {
    render(
      <ItemTask
        task={task}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    );
    const removeButton = screen.getByRole('button');
    expect(removeButton).toBeInTheDocument();
  });

  test('Quando o usuário clica no botão Remover o item é removido', () => {
    render(
      <ItemTask
        task={task}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    );
    fireEvent.click(screen.getByText('Tarefa1'));
    fireEvent.click(screen.getByRole('button'));
    expect(removeTask).toHaveBeenCalledWith(1);
    expect(itemList).not.toContain('Tarefa1');
  });
});
