import setCounter from '../hooks/counter';

const Counter = () => {
  const [count, setCount] = setCounter(0);
  return (
    <>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount('up')}>+1</button>
      <button onClick={() => setCount('down')}>-1</button>
    </>
  );
};

export default Counter;
