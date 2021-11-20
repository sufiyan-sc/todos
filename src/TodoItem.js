import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function TodoItem({
  id,
  task,
  isCompleted,
  updateTodos,
  toggleTodos,
  editTodos,
}) {
  const [isToggle, setIsToggle] = useToggleState(false);
  return (
    <>
      {isToggle ? (
        <EditTodoForm
          task={task}
          id={id}
          editTodos={editTodos}
          toggle={setIsToggle}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              toggleTodos(id);
            }}
          />
          <h4
            className="task"
            style={isCompleted ? { textDecoration: 'line-through' } : {}}
          >
            {task}
          </h4>
          <button
            onClick={() => {
              setIsToggle();
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              updateTodos(id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default TodoItem;
