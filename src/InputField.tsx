import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
function InputField({ todo, setTodo }: Props) {
  return (
    <TextField
      id="newTask"
      label="New Task"
      placeholder="Enter new task"
      variant="outlined"
      value={todo}
      onChange={(event) => setTodo(event.target.value)}
    />
  );
}

export default InputField;
