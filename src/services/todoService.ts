import api from './api';

import { Todo, Context } from '~/machines/todos/types';

const endpoint = 'home';

export const getTodo = async (context: Context) => {
  try {
    const response = await api.get(endpoint);

    return (context.todos = response.data);
  } catch (error) {
    console.error('::API GET', error);
  }
};

export const postTodo = async ({ id, label, status }: Todo) => {
  try {
    const response = await api.post(endpoint, { id, label, status });

    return response.data;
  } catch (error) {
    console.error('::API POST TODO', error);
  }
};

export const updateTodoLabel = async ({ id, label }: Todo) => {
  try {
    const response = await api.put(endpoint, { data: { id, label } });

    return response.data;
  } catch (error) {
    console.error('::API UPDATE TODO LABEL', error);
  }
};

export const doneTodo = async (id: string) => {
  try {
    const response = await api.put(endpoint, { data: { id } });

    return response.data;
  } catch (error) {
    console.error('::API DONE TODO', error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    return await api.delete(endpoint, { params: { id } });
  } catch (error) {
    console.error('::API DELETE TODO', error);
  }
};
