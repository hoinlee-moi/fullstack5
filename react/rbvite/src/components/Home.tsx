import { useCounter } from '../hooks/counter-context';
import Timer from './Timer';
import '../App.css';

export const Home = () => {
  const { count, plusCount, minusCount } = useCounter();

  return (
    <>
      <Timer />
      <h2>count : {count}</h2>
      <button onClick={plusCount}>count + 1</button>
      <button onClick={minusCount}>count - 1</button>
    </>
  );
};
