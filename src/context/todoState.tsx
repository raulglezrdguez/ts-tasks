import React, { useReducer } from 'react';

import TodoReducer from './todoReducer';
import TodoContext from './todoContext';

import * as types from './types';

import { Todo } from '../models/todo';

type Props = {
  children: React.ReactNode;
};

const TodoState = ({ children }: Props) => {
  const addTodo = (todo: Todo): void =>
    dispatch({ type: types.ADD_TODO, payload: todo });
  const deleteTodo = (todo: Todo): void =>
    dispatch({ type: types.DELETE_TODO, payload: todo });
  const updateTodo = (todo: Todo): void =>
    dispatch({ type: types.UPDATE_TODO, payload: todo });

  const initialState: types.State = {
    todos: [],
    addTodo,
    deleteTodo,
    updateTodo,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
