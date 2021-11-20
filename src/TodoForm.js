import React from 'react';
import useInputState from './hooks/useInputState';

function TodoForm({ addTodos }) {
  const [value, handleChange, reset] = useInputState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTodos(value);
        reset();
      }}
    >
      <input
        type="text"
        placeholder="Enter your Task"
        value={value}
        onChange={handleChange}
        className="taskInput"
      />
    </form>
  );
}

export default TodoForm;
