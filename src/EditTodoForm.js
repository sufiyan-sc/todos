import React from 'react';
import useInputState from './hooks/useInputState';

function EditToDoForm({ editTodos, task, id, toggle }) {
  const [value, handleChange] = useInputState(task);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        editTodos(id, value);
        toggle();
      }}
    >
      <input value={value} onChange={handleChange} className="taskInput" />
    </form>
  );
}

export default EditToDoForm;
