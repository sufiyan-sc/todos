import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function TodoItem({
  id,
  task,
  isCompleted,
  createdAt,
  updateTodos,
  toggleTodos,
  editTodos,
}) {
  const [isToggle, setIsToggle] = useToggleState(false);
  const taskInputEl = document.querySelector('.taskInput');
  console.log(taskInputEl);

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
            style={
              isCompleted
                ? { textDecoration: 'line-through', opacity: '0.5' }
                : {}
            }
          >
            {task}
          </h4>
          <small
            style={{ whiteSpace: 'nowrap', color: '#9e9e9e', paddingRight: 8 }}
          >
            {createdAt}
          </small>
          <button
            className="editTask"
            onClick={() => {
              setIsToggle();
            }}
          >
            Edit
          </button>
          <button
            className="deleteTask"
            onClick={() => {
              updateTodos(id);
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
}

export default TodoItem;
