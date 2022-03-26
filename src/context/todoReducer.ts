import { Todo } from '../models/todo';
import * as types from './types';

const TodoReducer = (
  state: {
    todos: Todo[];
  },
  action: { type: string; payload: Todo }
) => {
  const { type, payload } = action;
  let newTodos: Todo[] = [];
  switch (type) {
    case types.ADD_TODO:
      newTodos = [...state.todos, payload];
      return { ...state, todos: newTodos };

    case types.DELETE_TODO:
      newTodos = state.todos.filter((td) => td.id !== payload.id);
      return { ...state, todos: newTodos };

    case types.UPDATE_TODO:
      const index = state.todos.findIndex((td) => td.id === payload.id);
      if (index !== -1) {
        if (index === 0) {
          return { ...state, todos: [payload, ...state.todos.slice(1)] };
        }
        newTodos = [
          ...state.todos.slice(0, index),
          payload,
          ...state.todos.slice(index + 1),
        ];
        return {
          ...state,
          todos: newTodos,
        };
      }
      return state;

    default:
      return state;
  }
};

export default TodoReducer;
