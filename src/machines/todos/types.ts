type Status = 'pending' | 'done';

export type Todo = {
  id: string;
  label: string;
  status: Status;
};

export interface Context {
  todos: Todo[];
}

export interface State {
  states: {
    loading: {};
    start: {};
    failure: {};
  };
}

export type ADD = { type: 'ADD'; data: Todo };
export type REMOVE = { type: 'REMOVE'; id: string };
export type DONE = { type: 'DONE'; id: string };
export type FAILURE = { type: 'FAILURE' };

export type Event = ADD | REMOVE | DONE | FAILURE;
