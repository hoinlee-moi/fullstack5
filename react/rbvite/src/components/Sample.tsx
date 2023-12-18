import { useState } from 'react';

export const Sample = () => {
  // dummy state to test
  // const [, rerender] = useState<ChangeEvent<HTMLInputElement>>();
  const [array, setArray] = useState<number[]>([]);
  //   const [level, setLevel] = useState<'A' | 'B' | 'C' | 'D' | 'F'>('A');

  //   const total = array.reduce((acc, cur) => acc + cur);
  return (
    <>
      <p>Array : {array}</p>
      <button
        onClick={() =>
          setArray((pre) => {
            // pre.push(1);
            return [...pre, 1];
          })
        }
      >
        addArray
      </button>
      <input type='text' />
    </>
  );
};
