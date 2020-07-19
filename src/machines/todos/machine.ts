import { Machine } from 'xstate';

import { Context, State, Event, ADD, REMOVE, DONE } from './types';

import {
  getTodo,
  postTodo,
  patchTodo,
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

      done: (_, event: DONE) => patchTodo(event.id),

      remove: (_, event: REMOVE) => deleteTodo(event.id),

      failure: () => console.error('API Failed'),
    },
  },
);
