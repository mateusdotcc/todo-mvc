import React, { useEffect, useCallback, useState } from 'react';
import { useMachine } from '@xstate/react';
import { v4 as uuidv4 } from 'uuid';

import { useFetch } from '../../hooks/useFetch';
import Head from 'next/head';

import { todoMachine } from '../../machines/todoMachine';

import { Container } from '../../components';

import { Main, Form, List, ListItem, Input } from './Home.styled';

interface Data {
  id: string;
  label: string;
  status: 'pending' | 'completed';
}

const Home: React.FC = () => {
  const [state, send] = useMachine(todoMachine);

  const [label, setLabel] = useState('');

  const { data } = useFetch<Data[]>('home');

  // console.log('API', data);

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
    send({ type: 'COMPLETE', id });
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
          {state.context.todos.length > 0 ? (
            <>
              {state.context.todos.map(todo => (
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
            <h1>Loading...</h1>
          )}
        </List>
      </Main>
    </Container>
  );
};

export default Home;
