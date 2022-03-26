import { Todo } from '../models/todo';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export type State = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
};
