import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodos }) {
  return (
    <>
      <TodoItem todos={todos} updateTodos={updateTodos} />
    </>
  );
}

export default TodoList;
