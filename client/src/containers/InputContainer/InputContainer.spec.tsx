import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../../pages/todo';

describe('Ao escrever um texto no textarea e clicar no botão Adicionar', () => {
  test('o texto deve aparecer dentro da listagem', () => {
    const doc = render(<Todo />);
    const inputEl = doc.getByTestId('taskField');
    const addButtonEl = doc.getByTestId('addButton');

    fireEvent.change(inputEl, {
      target: {
        value: 'Tarefa1'
      }
    });
    fireEvent.click(addButtonEl);

    expect(screen.getByDisplayValue('Tarefa1')).toBeInTheDocument();
  });
});
