import React from 'react';
/* eslint-disable react/prop-types */
/* eslint no-lone-blocks: "error" */
/* eslint-env es6 */

export default function Todo({ todo, Toggletodo }) {
  function handelToggleChane() {
    Toggletodo(todo.id);
  }

  return (
    <div>
      <label htmlFor="checkbox">
        <input type="checkbox" checked={todo.complet} onChange={handelToggleChane} />
        { todo.name }
      </label>
    </div>
  );
}
