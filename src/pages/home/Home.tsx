import React, { useCallback, useState } from 'react';
import { useMachine } from '@xstate/react';
import { v4 as uuidv4 } from 'uuid';

import Head from 'next/head';

import { todoMachine } from '../../machines/todos/machine';

import { Container } from '../../components';

import { Main, Form, List, ListItem, Input } from './Home.styled';

const Home: React.FC = () => {
  const [label, setLabel] = useState('');
  const [state, send] = useMachine(todoMachine);

  const { todos } = state.context;

  const handleInputChange = useCallback(event => {
    const { value } = event.target;

    setLabel(value);
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (!label) return;

      send({
        type: 'ADD',
        data: {
          id: uuidv4(),
          label,
          status: 'pending',
        },
      });

      setLabel('');
    },
    [label],
  );

  const handleRemoveTodo = useCallback((id: string) => {
    send({ type: 'REMOVE', id });
  }, []);

  const handleCompleteTodo = useCallback((id: string) => {
    send({ type: 'DONE', id });
  }, []);

  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Todo MVC</title>
      </Head>

      <Main>
        <Form>
          <Input
            type="text"
            value={label}
            placeholder="Add task..."
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </Form>

        <List>
          {todos.length > 0 ? (
            <>
              {todos.map(todo => (
                <ListItem key={todo.id} status={todo.status}>
                  <button
                    type="button"
                    onClick={() => handleCompleteTodo(todo.id)}
                  >
                    Done
                  </button>

                  <p>{todo.label}</p>

                  {todo.status === 'pending' && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTodo(todo.id)}
                    >
                      Delete
                    </button>
                  )}
                </ListItem>
              ))}
            </>
          ) : (
            <h1>Empty</h1>
          )}
        </List>
      </Main>
    </Container>
  );
};

export default Home;
