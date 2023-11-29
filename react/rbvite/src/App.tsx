import { useState } from 'react';
import './App.css';
import Hello from './components/hello';

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const [obj, setObj] = useState({ name: 'hong', age: 20 });
  // let age = 0;

  const h1Style = { backgroundColor: 'green', color: 'white' };
  const Title = (props: {
    class: { backgroundColor: string; color: string };
  }) => <h1 style={props.class}>Vite + React</h1>;
  return (
    <>
      <Title class={h1Style} />
      <Hello name='lee' age={age} obj={obj}>
        <strong>안녕 세계!</strong>
        <div>hihi</div>
      </Hello>
      <div></div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count > 0 ? 'Big' : 'Zero'}
        </button>
        <p>X :{count && count}</p>
        <br />
        <button
          onClick={() => {
            setAge(age + 1);
          }}
        >
          plus age!!
        </button>
        <h2>
          parent another {obj.name} {obj.age}
        </h2>
      </div>
    </>
  );
}

export default App;
