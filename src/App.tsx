import React, { useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import InputField from './InputField';
import { Todo } from './models/todo';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo: () => void = () => {};

  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography variant="h2" component="div" gutterBottom>
        Tasks
      </Typography>

      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
    </Stack>
  );
};

export default App;
