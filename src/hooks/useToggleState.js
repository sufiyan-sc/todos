import { useState } from 'react';

function useToggleState(initialVal) {
  const [state, setState] = useState(initialVal);
  const handleChange = () => {
    setState(!state);
  };
  return [state, handleChange];
}

export default useToggleState;
