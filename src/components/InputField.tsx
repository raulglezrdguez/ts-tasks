import React, { useCallback, useContext, useRef, useState } from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TodoContext from '../context/todoContext';
import { Todo } from '../models/todo';

function InputField() {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const newTodo: Todo = {
        id: Date.now(),
        todo: inputRef.current ? inputRef.current.value : '',
        isDone: false,
      };

      addTodo(newTodo);

      setTodo('');
      inputRef.current?.focus();
      // inputRef.current?.blur();
    },
    [addTodo]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row">
        <TextField
          inputRef={inputRef}
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
