import React from 'react';

function TodoItem({ todos, updateTodos }) {
  return (
    <>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input type="checkbox" checked={item.isCompleted} />
            <h4
              style={item.isCompleted ? { textDecoration: 'line-through' } : {}}
            >
              {item.task}
            </h4>
            <button>Edit</button>
            <button
              onClick={() => {
                updateTodos(item.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TodoItem;
