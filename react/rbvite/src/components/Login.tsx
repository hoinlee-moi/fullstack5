// src/components/Login.tsx
import { useRef, useState } from 'react';
type Props = {
  login: (id: number, name: string) => void;
};

const Login = ({ login }: Props) => {
  const loginIdInput = useRef<HTMLInputElement>(null);
  const loginPsInput = useRef<HTMLInputElement>(null);

  //   const [idInputVal, setIdInputVal] = useState('');
  //   const [nameInputVal, setNameInputVal] = useState('');

  const loginClickHandle = () => {
    const id = loginIdInput.current!.value;
    const ps = loginPsInput.current!.value;
    login(Number(id), ps);
  };
  //   const change = () => {
  //     const id = loginIdInput.current!.value;
  //     const ps = loginPsInput.current!.value;
  //     console.log(id, ps);
  //   };
  return (
    <>
      <div>
        Login ID(숫자): <input type='number' ref={loginIdInput} />
      </div>
      <div>
        Login Name:{' '}
        <input
          type='text'
          ref={loginPsInput}
          //   onChange={(e) => setNameInputVal(e.target.value)}
        />
      </div>
      <button onClick={loginClickHandle}>Login</button>
      {/* <button onClick={() => login(Number(idInputVal), nameInputVal)}>
        Login2
      </button> */}
    </>
  );
};
export default Login;
