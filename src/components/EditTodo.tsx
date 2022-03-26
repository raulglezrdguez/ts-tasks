import {
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import TodoContext from '../context/todoContext';
import { Todo } from '../models/todo';

type Props = {
  todo: Todo;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditTodo = ({ todo, setEditing }: Props) => {
  const { updateTodo } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const [variables, setVariables] = useState({
    todo: todo.todo,
    isDone: todo.isDone !== undefined ? todo.isDone : true,
  });

  useEffect(() => {
    setVariables({ todo: todo.todo, isDone: todo.isDone });
  }, [todo.todo, todo.isDone]);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const updTodo: Todo = {
        id: todo.id,
        todo: variables.todo,
        isDone: variables.isDone,
      };

      console.log(updTodo);
      updateTodo(updTodo);

      inputRef.current?.focus();
      // inputRef.current?.blur();
    },
    [todo.id, updateTodo, variables]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="column">
        <TextField
          inputRef={inputRef}
          id="task"
          label="Task"
          placeholder="Enter task"
          variant="outlined"
          value={variables.todo}
          onChange={(event) =>
            setVariables({ ...variables, todo: event.target.value })
          }
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={variables.isDone}
                onChange={(event) => {
                  console.log(variables);
                  setVariables({ ...variables, isDone: event.target.checked });
                }}
              />
            }
            label="Completed"
          />
        </FormGroup>
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Update
          </Button>
          <Button
            variant="contained"
            type="button"
            onClick={() => setEditing(false)}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default EditTodo;
