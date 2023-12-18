// src/components/My.tsx

import Profile from './Profile';
import { useSession } from '../hooks/session-context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const My = () => {
  const {
    session: { loginUser },
  } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginUser) navigate('/login');
  }, [loginUser]);
  return <Profile />;
};
export default My;
