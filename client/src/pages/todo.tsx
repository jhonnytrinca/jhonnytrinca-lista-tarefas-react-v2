import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { TodoList, InputContainer } from '../containers';
import useTodo from '../hooks/useTodo';

function Todo() {
  const [task, setTask] = useState<string>('');
  const { tasks, getAllTodos, create, remove, complete } = useTodo();

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTask(e.target.value);
  };

  const handleSubmit = useCallback(async () => {
    await create({
      title: task,
      status: 'pending'
    });
    await getAllTodos();
    setTask('');
  }, [create, task, getAllTodos]);

  const removeTask = useCallback(
    async (id) => {
      await remove(id);
      await getAllTodos();
    },
    [remove, getAllTodos]
  );

  const completeTask = useCallback(
    async (id: number, e: any) => {
      if (e.target.checked === true) {
        await complete(id, { status: 'completed' });
        await getAllTodos();
      } else {
        await complete(id, { status: 'pending' });
        await getAllTodos();
      }
    },
    [complete, getAllTodos]
  );

  return (
    <div>
      <InputContainer
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={task}
      />
      <TodoList
        itemList={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default Todo;
