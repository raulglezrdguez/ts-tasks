import React, { useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import InputField from './components/InputField';
import { Todo } from './models/todo';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), todo: todo.trim(), isDone: false },
      ]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography variant="h2" component="div" gutterBottom>
        Tasks
      </Typography>

      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </Stack>
  );
};

export default App;
