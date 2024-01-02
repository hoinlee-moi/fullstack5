import { useNavigate } from 'react-router-dom';
import LoginForm from '../molecules/LoginForm';
import { useLayoutEffect } from 'react';
import { useSession } from '../../hooks/session-context';

const Login = () => {
  const {
    session: { user },
  } = useSession();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (user) navigate('/profile');
  }, []);
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]'>
      <LoginForm />
    </div>
  );
};

export default Login;
