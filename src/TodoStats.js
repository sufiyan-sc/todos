import React from 'react';

function TodoStats({ totalCount, completedTaskCount, pendingTaskCount }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h3>Tasks : {totalCount()} </h3>
      <p>Completed Tasks : {completedTaskCount()}</p>
      <p>Pending Tasks : {pendingTaskCount()}</p>
    </div>
  );
}

export default TodoStats;
