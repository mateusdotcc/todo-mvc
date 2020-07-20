import { NextApiRequest, NextApiResponse } from 'next';

import { Todo } from '~/machines/todos/types';

const todos: Todo[] = [];

function updateTodo({ id, label }: Todo) {
  const index = todos.findIndex(todo => todo.id === id);

  const item = todos[index];

  if (!label) {
    const updateStatus = item.status === 'pending' ? 'done' : 'pending';

    item.status = updateStatus;

    if (item.status === 'done') {
      todos.push(todos.splice(index, 1)[0]);
    }
  }

  if (label) item.label = label;
}

export default (request: NextApiRequest, response: NextApiResponse<Todo[]>) => {
  const { method } = request;

  switch (method) {
    case 'GET':
      response.status(200).json(todos);
      break;

    case 'POST':
      todos.push(request.body);

      response.status(200).json(todos);
      break;

    case 'PUT':
      const body: { data: Todo } = request.body;

      updateTodo(body.data);

      response.status(200).json(todos);
      break;

    case 'DELETE':
      const { id } = request.query;

      const index = todos.findIndex(todo => todo.id === id);

      todos.splice(index, 1);

      response.status(200).json(todos);
      break;

    default:
      response.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      response.status(405).end(`Method ${method} not Allowed`);
  }
};
