import './App.css';
import Box from './components/Box';
import Counter from './components/Counter';
import Title from './components/Title';
import setCounter from './hooks/UseSetCounter';

function App() {
  const [count, setCount] = setCounter(0);
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
          sub title: react basic
        </Title>
        <h1>Count : {count}</h1>
        <Counter increaseOrDecreaseCount={setCount} />
      </Box>
    </>
  );
}

export default App;
