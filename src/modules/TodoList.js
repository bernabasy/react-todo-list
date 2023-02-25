import React from 'react';
import Todo from './Todo';

const TodoList = TodoList => ({ todos, toggletodo }) {
  return todos.map((todo) => (
    <Todo key={todo.id} toggletodo={toggletodo} todo={todo} />
  ));
}
export default TodoList;
