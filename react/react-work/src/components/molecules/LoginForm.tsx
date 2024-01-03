import { FormEvent, useRef } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import CheckBox from '../atoms/CheckBox';
import { useSession } from '../../hooks/session-context';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useSession();
  const navigate = useNavigate();
  const idInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const alCheckBoxRef = useRef<HTMLInputElement>(null);

  const loginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idInputRef.current?.value ?? '';
    const name = nameInputRef.current?.value ?? '';
    const auto = alCheckBoxRef.current?.checked ?? false;
    if (id === '') return alert('please enter ID');

    if (name === '') return alert('please enter password');
    login({ id: +id, name, auto });
    navigate('/cart');
  };

  return (
    <form onSubmit={loginSubmit} className='text-center'>
      <div className='grid grid-rows-2 gap-y-4 w-80'>
        <Input
          type='number'
          placeholder='ENTER ID...'
          ref={idInputRef}
          classNames='p-2'
        />
        <Input
          type='text'
          placeholder='ENTER NAME...'
          ref={nameInputRef}
          classNames='p-2'
        />
      </div>
      <div className='mt-2'>
        <CheckBox classNames='ml-2' ref={alCheckBoxRef} content='AutoLogin' />
      </div>
      <Button type='submit' className='mt-1 text-xl ' detail='Login' />
    </form>
  );
};

export default LoginForm;
