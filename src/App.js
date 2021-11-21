import React from 'react';
import './App.css';
import TodoApp from './TodoApp';

function App() {
  const styleSheet = {
    display: 'grid',
    placeContent: 'center',
    margin: '1rem',
  };
  return (
    <div style={styleSheet}>
      <TodoApp />
    </div>
  );
}

export default App;
