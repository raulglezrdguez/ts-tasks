import React, { useRef } from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (event: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAddTodo }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    handleAddTodo(event);

    inputRef.current?.blur();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row">
        <TextField
          ref={inputRef}
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
