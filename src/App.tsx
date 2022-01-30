import React from 'react';
import './App.css';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

const App = () => {
  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography variant="h2" component="div" gutterBottom>
        Tasks
      </Typography>
    </Stack>
  );
};

export default App;
