import React, { useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import InputField from './InputField';

const App = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography variant="h2" component="div" gutterBottom>
        Tasks
      </Typography>
      <Stack spacing={2} direction="row">
        <InputField todo={todo} setTodo={setTodo} />
        <Button variant="contained">Add</Button>
      </Stack>
    </Stack>
  );
};

export default App;
