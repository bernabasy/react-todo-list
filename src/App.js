import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoList from './modules/TodoList';

const LOCAL_STORAGE_KEY = 'todo.todos';
function App() {
  const [todos, setTodos] = useState([]);
  const inputNameRef = useRef();
  function changeHandler() {
    const name = inputNameRef.current.value;
    setTodos((prevTodo) => [...prevTodo, { id: uuidv4(), name, complet: true }]);
    inputNameRef.current.value = null;
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // function Toggletodo(id) {
  //   const newTodos = [...todos];
  //   const todo = newTodos.find((todo) => todo.id === id);
  //   todo.complet = !todo.complet;
  //   setTodos(newTodos);
  // }

  return (
    <>

      <div className="d-flex flex-column align-items-center justify-content-center ">
        <div className="text-center mt-4 h1">todos</div>
        <div>
          <input ref={inputNameRef} className="rounded" type="text" placeholder="yourtods" />
          <button onClick={changeHandler} className="rounded" type="button">
            add
          </button>
        </div>
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
