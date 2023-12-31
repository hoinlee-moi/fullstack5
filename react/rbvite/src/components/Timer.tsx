import { useState } from 'react';
import { useTimer } from '../hooks/timer-hooks';

const Timer = () => {
  const [title, setTitle] = useState('Timer');
  const [secTimer, setSecTimer] = useState(0);
  const { useInterTimer, useTimeOut } = useTimer();

  useInterTimer(() => setSecTimer((sec) => sec + 10), 10000);

  useTimeOut((name) => setTitle(name), 5000, 'TimerGood');

  return (
    <div>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <strong style={{ color: 'red' }}>{secTimer} </strong>
      {/* <strong style={{ color: 'blue' }}>{miliSecTimer}</strong> */}
    </div>
  );
};

export default Timer;
