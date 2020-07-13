import { Machine, spawn, send } from 'xstate';
import { mutate } from 'swr';

import api from '../services/api';

type Todo = {
  id: string;
  label: string;
  status: 'pending' | 'completed';
};

interface Context {
  todos: Todo[];
}

interface State {
  states: {
    loading: {};
    start: {};
    add: {};
    remove: {};
    complete: {};
    failure: {};
  };
}

type SUCCESS = { type: 'SUCCESS' };
type FAILURE = { type: 'FAILURE' };
type ADD = { type: 'ADD'; data: Todo };
type REMOVE = { type: 'REMOVE'; id: string };
type COMPLETE = { type: 'COMPLETE'; id: string };

type Event = SUCCESS | FAILURE | ADD | REMOVE | COMPLETE;

const requestData = async (context: Context) => {
  const { todos } = context;

  try {
    const response = await api.get('home');

    todos.push(response.data);
  } catch (error) {
    console.warn('API error', error);
  }
};

export const todoMachine = Machine<Context, State, Event>(
  {
    id: 'todo',
    initial: 'loading',
    context: { todos: [] },
    states: {
      loading: {
        invoke: {
          id: 'getTodos',
          src: (context, _) => requestData(context),
          onDone: 'start',
          onError: 'failure',
        },
      },

      start: {
        on: {
          ADD: 'add',
          REMOVE: 'remove',
          COMPLETE: 'complete',
        },
      },

      add: {
        entry: ['add'],
      },

      remove: {
        entry: ['remove'],
      },

      complete: {
        entry: ['complete'],
      },

      failure: {
        entry: ['failure'],
      },
    },
  },
  {
    actions: {
      add: async (_, event: ADD) => {
        const { id, label, status } = event.data;

        await api.post('home', {
          id,
          label,
          status,
        });
      },

      remove: (context, event: REMOVE) => {
        const { todos } = context;

        const index = todos.findIndex(todo => todo.id === event.id);

        mutate('home', [...todos, todos.splice(index, 1)]);

        // todos.splice(index, 1);
      },

      complete: (context, event: COMPLETE) => {
        const { todos } = context;

        const index = todos.findIndex(todo => todo.id === event.id);

        const item = todos[index];

        const updateStatus =
          item.status === 'pending' ? 'completed' : 'pending';

        item.status = updateStatus;

        if (item.status === 'completed') {
          todos.push(todos.splice(index, 1)[0]);
        }
      },

      failure: () => {
        console.warn('API Failed');
      },
    },
  },
);
