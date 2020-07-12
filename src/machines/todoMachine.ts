import { Machine } from 'xstate';

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
    idle: {};
    add: {};
    remove: {};
    complete: {};
  };
}

type ADD = { type: 'ADD'; data: Todo };

type REMOVE = { type: 'REMOVE'; id: string };

type COMPLETE = { type: 'COMPLETE'; id: string };

type Event = ADD | REMOVE | COMPLETE;

export const todoMachine = Machine<Context, State, Event>(
  {
    id: 'todo',
    initial: 'idle',
    context: {
      todos: [],
    },
    states: {
      idle: {
        on: {
          ADD: 'add',
          REMOVE: 'remove',
          COMPLETE: 'complete',
        },
      },
      add: {
        on: {
          ADD: {
            actions: ['add'],
          },
          REMOVE: {
            actions: ['remove'],
          },
          COMPLETE: {
            actions: ['complete'],
          },
        },
      },
      remove: {
        entry: ['remove'],
      },
      complete: {
        entry: ['complete'],
      },
    },
  },
  {
    actions: {
      add: (context, event: ADD) => {
        const { todos } = context;

        todos.push(event.data);
      },

      remove: (context, event: REMOVE) => {
        const { todos } = context;

        const index = todos.findIndex(todo => todo.id === event.id);

        todos.splice(index, 1);
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
    },
  },
);
