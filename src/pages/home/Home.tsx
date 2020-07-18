import React, { useCallback, useState } from 'react';
import { useMachine } from '@xstate/react';
import { v4 as uuidv4 } from 'uuid';

import { todoMachine } from '../../machines/todos/machine';

import Head from 'next/head';

import { FiPlus } from 'react-icons/fi';
import IllustrationEmpty from '../../assets/svg/meditating.svg';

import { TaskItem } from '../../components';

import {
  Header,
  HeaderContainer,
  Center,
  Form,
  SubmitButton,
  Counter,
  List,
  Input,
  Empty,
} from './Home.styled';

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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Todo MVC</title>
      </Head>

      <Header>
        <h1>Organize your works</h1>

        <HeaderContainer>
          <Form>
            <Input
              type="text"
              value={label}
              placeholder="Task Title"
              onChange={handleInputChange}
            />

            <SubmitButton
              type="submit"
              icon={FiPlus}
              onClick={handleSubmit}
              disabled={label.length === 0}
            />
          </Form>
        </HeaderContainer>
      </Header>

      <Center>
        <List>
          {todos.length > 0 ? (
            <>
              <header>
                <h2>All Tasks</h2>

                <Counter>
                  {todos.filter(todo => todo.status === 'completed').length} of{' '}
                  {todos.length} done
                </Counter>
              </header>

              {todos.map(todo => (
                <TaskItem
                  key={todo.id}
                  label={todo.label}
                  status={todo.status}
                  onClickDone={() => handleCompleteTodo(todo.id)}
                  onClickDelete={() => handleRemoveTodo(todo.id)}
                />
              ))}
            </>
          ) : (
            <Empty>
              <IllustrationEmpty />

              <h2>
                Let's organize your works with priority and do everything
                without stress.
              </h2>
            </Empty>
          )}
        </List>
      </Center>
    </>
  );
};

export default Home;
