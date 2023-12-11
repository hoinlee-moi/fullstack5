import { useRef, useState } from 'react';
import './App.css';
import Box from './components/Box';
import Counter from './components/Counter';
import Title from './components/Title';
import setCounter from './hooks/UseSetCounter';

function App() {
  const [count, setCount] = setCounter(0);
  const [subTitle, setSubTitle] = useState('sub title: react basic');
  const inputRef = useRef<HTMLInputElement>(null);

  const changeSubTitle = () => {
    const titleStr = inputRef.current?.value || '';
    setSubTitle(titleStr);
  };

  return (
    <>
      <Box
        borderWidth='2px'
        borderColor='blue'
        borderStyle='solid'
        padding='4px'
        margin='2px'
      >
        <Title title='React Tutorial' color='red'>
          {subTitle}
        </Title>
        <h1>Count : {count}</h1>
        <Counter increaseOrDecreaseCount={setCount} />
        <div>
          <input type='text' ref={inputRef} />
          <button onClick={changeSubTitle}>타이틀 수정</button>
        </div>
      </Box>
    </>
  );
}

export default App;
