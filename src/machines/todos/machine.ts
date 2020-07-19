import { Machine } from 'xstate';

import { Context, State, Event, ADD, UPDATE, DONE, REMOVE } from './types';

import {
  getTodo,
  postTodo,
  updateTodoLabel,
  doneTodo,
  deleteTodo,
} from '~/services/todoService';

export const todoMachine = Machine<Context, State, Event>(
  {
    id: 'todo',
    initial: 'loading',
    context: { todos: [] },
    states: {
      loading: {
        invoke: {
          id: 'getTodos',
          src: (context, _) => getTodo(context),
          onDone: 'start',
          onError: 'failure',
        },
      },

      start: {
        on: {
          ADD: {
            target: 'loading',
            actions: ['add'],
          },
          UPDATE: {
            target: 'loading',
            actions: ['update'],
          },
          REMOVE: {
            target: 'loading',
            actions: ['remove'],
          },
          DONE: {
            target: 'loading',
            actions: ['done'],
          },
        },
      },

      failure: {
        entry: ['failure'],
      },
    },
  },
  {
    actions: {
      add: (_, event: ADD) => postTodo(event.data),

      update: (_, event: UPDATE) => {
        const { id, label } = event.data;

        updateTodoLabel({ id, label });
      },

      done: (_, event: DONE) => doneTodo(event.id),

      remove: (_, event: REMOVE) => deleteTodo(event.id),

      failure: () => console.error('API Failed'),
    },
  },
);
