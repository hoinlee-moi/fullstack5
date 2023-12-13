import { ChangeEvent, useState } from 'react';

export const Sample = () => {
  // dummy state to test
  const [, rerender] = useState<ChangeEvent<HTMLInputElement>>();
  const [array, setArray] = useState<number[]>([]);
  //   const [level, setLevel] = useState<'A' | 'B' | 'C' | 'D' | 'F'>('A');

  //   const total = array.reduce((acc, cur) => acc + cur);

  return (
    <>
      <p>Array : {array}</p>
      <button onClick={() => setArray([2, 2, 2])}>addArray</button>
      <input type='text' onChange={rerender} />
    </>
  );
};
