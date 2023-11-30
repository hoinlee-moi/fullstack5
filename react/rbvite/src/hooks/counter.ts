import { useState } from 'react';

const setCounter = (startCount: number) => {
  const [count, setCount] = useState(startCount);

  const calCount = (command: 'up' | 'down') => {
    if (command === 'up') setCount((prevCount) => prevCount + 1);
    else setCount((prevCount) => prevCount - 1);
  };

  return [count, calCount] as const;
};

export default setCounter;
