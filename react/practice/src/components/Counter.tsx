type Props = {
  increaseOrDecreaseCount: (args: 'up' | 'down') => void;
};
const Counter = ({ increaseOrDecreaseCount }: Props) => {
  return (
    <>
      <button onClick={() => increaseOrDecreaseCount('up')}>+1</button>
      <button onClick={() => increaseOrDecreaseCount('down')}>-1</button>
    </>
  );
};

export default Counter;
