import React, { useEffect, useState } from 'react';

import { Todo } from '~/machines/todos/types';

import { Container } from './Counter.styled';

interface Props {
  todos: Todo[];
}

const Counter: React.FC<Props> = ({ todos }) => {
  const [done, setDone] = useState(0);

  useEffect(() => {
    function checkTaskDone() {
      const completedTasks = todos.filter(todo => todo.status === 'done')
        .length;

      return setDone(completedTasks);
    }

    checkTaskDone();
  }, [todos]);

  return (
    <Container>
      {done} of {todos.length} done
    </Container>
  );
};

export default Counter;
