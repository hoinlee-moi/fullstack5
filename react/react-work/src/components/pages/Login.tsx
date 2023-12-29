import { FormEvent, useRef, useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Login = () => {
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('login!!!', count);
    setCount(count + 1);
  };
  return (
    <form onSubmit={submit} className='text-center'>
      <div className='grid grid-rows-2 gap-y-4'>
        <Input
          type='text'
          className='w-80'
          placeholder='Enter Id...'
          ref={idInputRef}
        />
        <Input type='number' placeholder='Enter password...' ref={pwInputRef} />
      </div>
      <Button type='submit' className='mt-2 '>
        Login
      </Button>
    </form>
  );
};

export default Login;
