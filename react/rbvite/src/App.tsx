// src/App.tsx
import Hello from './components/Hello';
import My from './components/My';
import './App.css';
import { useCounter } from './hooks/counter-context';
import Timer from './components/Timer';
import { useCallback } from 'react';

function App() {
  const { count, plusCount, minusCount } = useCounter();
  const fn = useCallback(() => 'FN!', []);

  return (
    <>
      <Timer />
      <My />
      <h2>count : {count}</h2>
      <button onClick={plusCount}>count + 1</button>
      <button onClick={minusCount}>count - 1</button>
      <Hello name='홍길동' age={32} fn={fn} />
    </>
  );
}

export default App;
