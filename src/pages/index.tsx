import React, { useCallback, useState, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '~/machines/todos/types';
import { todoMachine } from '~/machines/todos/machine';

import { FiPlus } from 'react-icons/fi';
import IllustrationEmpty from '~/assets/svg/meditating.svg';

import { TaskItem, Counter } from '~/components';

import {
  Header,
  HeaderContainer,
  Center,
  Form,
  SubmitButton,
  List,
  Input,
  Empty,
} from '~/styles/Home.styled';

const placeholders = [
  'e.g. Meet Alex at 11am',
  'e.g. Read every day',
  'e.g. English class every weekday',
  'e.g. Family lunch on Sunday',
  'e.g. Renew gym every',
];

const Home: React.FC = () => {
  const [label, setLabel] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [state, send] = useMachine(todoMachine);

  const { todos } = state.context;

  const handleInputChange = useCallback(event => {
    setLabel(event.target.value);
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

  const handleUpdateTodoLabel = useCallback(({ id, label }: Todo) => {
    send({ type: 'UPDATE', data: { id, label } });
  }, []);

  const handleRemoveTodo = useCallback((id: string) => {
    send({ type: 'REMOVE', id });
  }, []);

  const handleCompleteTodo = useCallback((id: string) => {
    send({ type: 'DONE', id });
  }, []);

  useEffect(() => {
    const selectedPlaceholder =
      placeholders[Math.floor(Math.random() * placeholders.length)];

    setPlaceholder(selectedPlaceholder);
  }, [handleSubmit]);

  return (
    <>
      <Header>
        <h1>Organize your works</h1>

        <HeaderContainer>
          <Form>
            <Input
              type="text"
              value={label}
              placeholder={placeholder}
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

                <Counter todos={todos} />
              </header>

              {todos.map(todo => (
                <TaskItem
                  key={todo.id}
                  id={todo.id}
                  label={todo.label}
                  status={todo.status}
                  onChange={handleUpdateTodoLabel}
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
