import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((td) => (
        <TodoItem key={td.id} todo={td} />
      ))}
    </div>
  );
};

export default TodoList;
