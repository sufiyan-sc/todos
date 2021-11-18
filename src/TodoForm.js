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
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}

export default TodoForm;
