import { Machine } from 'xstate';

import api from '../../services/api';

import { Context, State, Event, Todo, ADD, REMOVE, DONE } from './types';

const requestData = async (context: Context): Promise<Todo[]> => {
  try {
    const response = await api.get('home');

    return (context.todos = response.data);
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
      add: (_, event: ADD) => {
        try {
          api.post('home', event.data);
        } catch (error) {
          console.warn('::POST error', error);
        }
      },

      remove: (_, event: REMOVE) => {
        const { id } = event;

        try {
          api.delete('home', { params: { id } });
        } catch (error) {
          console.warn('::DELETE error', error);
        }
      },

      done: (_, event: DONE) => {
        const { id } = event;

        try {
          api.put('home', { data: { id } });
        } catch (error) {
          console.warn('::PUT error', error);
        }
      },

      failure: () => {
        console.warn('API Failed');
      },
    },
  },
);
