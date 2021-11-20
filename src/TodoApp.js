import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || '[]';

  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodos = (newTask) => {
    setTodos([...todos, { id: uuid(), task: newTask, isCompleted: false }]);
  };
  const updateTodos = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const toggleTodos = (id) => {
    const newTodos = todos.map((item) => {
      return item.id === id
        ? { ...item, isCompleted: !item.isCompleted }
        : item;
    });
    setTodos(newTodos);
  };
  const editTodos = (id, newTask) => {
    console.log('working');
    const newTodos = todos.map((item) => {
      return item.id === id ? { ...item, task: newTask } : item;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <TodoForm addTodos={addTodos} />
      <TodoList
        todos={todos}
        updateTodos={updateTodos}
        toggleTodos={toggleTodos}
        editTodos={editTodos}
      />
    </>
  );
}

export default TodoApp;
