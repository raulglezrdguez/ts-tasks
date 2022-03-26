import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import InputField from './components/InputField';
import TodoList from './components/TodoList';
import TodoState from './context/todoState';
import TodoContext from './context/todoContext';

const App: React.FC = () => {
  return (
    <TodoState>
      <Stack spacing={2} alignItems={'center'}>
        <Typography variant="h2" component="div" gutterBottom>
          Tasks
        </Typography>

        <InputField />

        <TodoList />
      </Stack>
    </TodoState>
  );
};

export default App;
