import React from 'react';
import { Todo } from '../models/todo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return <div>TodoList works</div>;
};

export default TodoList;
