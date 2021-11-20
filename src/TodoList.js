import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodos, toggleTodos, editTodos }) {
  if (todos.length)
    return (
      <>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              task={item.task}
              isCompleted={item.isCompleted}
              updateTodos={updateTodos}
              toggleTodos={toggleTodos}
              editTodos={editTodos}
            />
          );
        })}
      </>
    );
  return null;
}
export default TodoList;
