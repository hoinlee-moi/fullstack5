// src/App.tsx
import Hello from './components/Hello';
import My from './components/My';
import './App.css';
import { useCounter } from './hooks/counter-context';
import Timer from './components/Timer';

function App() {
  const { count } = useCounter();

  return (
    <>
      <Timer />
      <My />
      <Hello name='홍길동' age={30}>
        <h2>count : {count}</h2>
        <h3>반갑습니다~</h3>
      </Hello>
    </>
  );
}

export default App;
