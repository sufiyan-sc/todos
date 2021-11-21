import React from 'react';
import useInputState from './hooks/useInputState';
import useToggleState from './hooks/useToggleState';

function TodoForm({ addTodos }) {
  const [value, handleChange, reset] = useInputState('');
  const [isEmpty, setIsEmpty] = useToggleState(false);

  const addTask = () => {
    addTodos(value);
  };

  const inputCheck = () => {
    let taskInputEl = document.querySelector('.taskInput');
    let taskInputValEl = taskInputEl.value;
    taskInputValEl === '' ? setIsEmpty() : addTask();
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        inputCheck();
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
      {isEmpty ? (
        <small className="warning">Please Enter input first</small>
      ) : null}
    </form>
  );
}

export default TodoForm;
