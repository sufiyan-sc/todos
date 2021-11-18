import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';

function TodoApp() {
  const initialTodos = [
    {
      id: 1,
      task: 'Go to Gym',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'Buy some Vegetables',
      isCompleted: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodos = (newTask) => {
    setTodos([...todos, { id: uuid(), task: newTask, isCompleted: false }]);
  };
  const updateTodos = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <TodoForm addTodos={addTodos} />
      <TodoList todos={todos} updateTodos={updateTodos} />
    </>
  );
}

export default TodoApp;
