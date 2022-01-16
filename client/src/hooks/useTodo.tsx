import axios from 'axios';
import { useCallback, useState } from 'react';
import { taskProps } from '../containers/TodoList/interfaces';

const getAll = () => axios.get<taskProps[]>('/api/todo');

const createTodo = (todo: Pick<taskProps, 'title' | 'status'>) =>
  axios.post('/api/todo', todo);

const updateTodo = (id: number, todo: Pick<taskProps, 'status'>) =>
  axios.put(`/api/todo/${id}`, todo);

const deleteTodo = (id: number) => axios.delete(`${'/api/todo'}/${id}`);

const useTodo = () => {
  const [tasks, setTasks] = useState<taskProps[]>([]);

  const getAllTodos = useCallback(async () => {
    const { data } = await getAll();
    setTasks(data);
  }, []);

  const create = useCallback(
    async (todo: Pick<taskProps, 'title' | 'status'>) => {
      await createTodo(todo);
    },
    []
  );

  const complete = useCallback(
    async (id: number, todo: Pick<taskProps, 'status'>) => {
      await updateTodo(id, todo);
    },
    []
  );

  const remove = useCallback(async (id: number) => {
    await deleteTodo(id);
  }, []);

  return { tasks, getAllTodos, create, complete, remove };
};

export default useTodo;
