import React, { useContext, useState } from 'react';
import { Todo } from '../models/todo';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EditTodo from './EditTodo';
import TodoContext from '../context/todoContext';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const [editing, setEditing] = useState(false);
  const { deleteTodo } = useContext(TodoContext);

  return (
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        {!editing ? (
          <Stack spacing={2} direction="row">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {todo.todo}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {todo.isDone ? 'Done' : 'Uncomplete'}
            </Typography>
          </Stack>
        ) : (
          <EditTodo todo={todo} setEditing={setEditing} />
        )}
      </CardContent>
      {!editing && (
        <CardActions>
          <Button size="small" onClick={() => setEditing(true)}>
            Edit
          </Button>
          <Button size="small" onClick={() => deleteTodo(todo)}>
            Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default TodoItem;
