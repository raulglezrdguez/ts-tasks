import { createContext } from 'react';

import type { State } from './types';

const defaultState: State = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
};

const TodoContext = createContext<State>(defaultState);

export default TodoContext;
