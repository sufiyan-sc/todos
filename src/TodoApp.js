import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import TodoStats from './TodoStats';

function TodoApp() {
  const defaultTodos = [
    {
      id: 0,
      task: '  Create a new Task',
      isCompleted: false,
    },
  ];
  const initialTodos =
    JSON.parse(window.localStorage.getItem('todos')) || defaultTodos;
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodos = (newTask) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        task: newTask,
        isCompleted: false,
        createdAt: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const totalCount = () => {
    return todos.length;
  };

  const updateTodos = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const completedTaskCount = () => {
    const completedCountArray = todos.map((item) =>
      item.isCompleted === true ? 1 : 0
    );
    const completedCount = completedCountArray.reduce(
      (accumulator, currentVal) => {
        return accumulator + currentVal;
      }
    );
    return completedCount;
  };

  const pendingTaskCount = () => {
    return totalCount() - completedTaskCount();
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
    const newTodos = todos.map((item) => {
      return item.id === id ? { ...item, task: newTask } : item;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <TodoStats
        totalCount={totalCount}
        completedTaskCount={completedTaskCount}
        pendingTaskCount={pendingTaskCount}
      />
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
