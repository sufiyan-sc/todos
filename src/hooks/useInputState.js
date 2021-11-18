import { useState } from 'react';

function useInputState(initialVal) {
  const [state, setState] = useState(initialVal);
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const reset = () => {
    setState('');
  };
  return [state, handleChange, reset];
}

export default useInputState;
