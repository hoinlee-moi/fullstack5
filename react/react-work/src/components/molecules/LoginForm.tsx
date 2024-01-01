import { FormEvent, useRef } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const LoginForm = () => {
  const idInputRef = useRef<HTMLInputElement>(null);
  const psInputRef = useRef<HTMLInputElement>(null);

  const loginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idInputRef.current?.value ?? '';
    const ps = psInputRef.current?.value ?? '';
    if (id === '') return alert('please enter ID');

    if (ps === '') return alert('please enter password');
    // login({id,ps})
  };
  return (
    <form onSubmit={loginSubmit} className='text-center'>
      <div className='grid grid-rows-2 gap-y-4'>
        <Input
          type='text'
          className='w-80'
          placeholder='Enter Id...'
          ref={idInputRef}
        />
        <Input type='number' placeholder='Enter password...' ref={psInputRef} />
      </div>
      <Button type='submit' className='mt-2 '>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
