import React from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (event: React.FormEvent) => void;
}
function InputField({ todo, setTodo, handleAddTodo }: Props) {
  return (
    <form onSubmit={handleAddTodo}>
      <Stack spacing={2} direction="row">
        <TextField
          id="newTask"
          label="New Task"
          placeholder="Enter new task"
          variant="outlined"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Stack>
    </form>
  );
}

export default InputField;
