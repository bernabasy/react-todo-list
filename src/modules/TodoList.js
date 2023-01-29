import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggletodo }) {
  return todos.map((todo) => (
    <Todo key={todo.id} toggletodo={toggletodo} todo={todo} />
  ));
}
