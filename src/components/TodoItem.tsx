import React from 'react';
import { Todo } from '../models/todo';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return <div>TodoItem</div>;
};

export default TodoItem;
