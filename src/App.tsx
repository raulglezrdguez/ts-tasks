import React from 'react';
import './App.css';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography variant="h2" component="div" gutterBottom>
        Tasks
      </Typography>
      <Stack spacing={2} direction="row">
        <TextField
          id="newTask"
          label="New Task"
          placeholder="Enter new task"
          variant="outlined"
        />
        <Button variant="contained">Add</Button>
      </Stack>
    </Stack>
  );
};

export default App;
