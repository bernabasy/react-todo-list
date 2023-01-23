import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, Toggletodo }) {
  return (
    todos.map((todo) => <Todo key={todo.id} Toggletodo={Toggletodo} todo={todo} />)
  );
}
