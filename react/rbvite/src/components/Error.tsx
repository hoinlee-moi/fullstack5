import { useLocation, useNavigate } from 'react-router-dom';
import { useTimer } from '../hooks/timer-hooks';

export const Error = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { useTimeOut } = useTimer();
  useTimeOut(() => navigate('/'), 2000);
  return <h1>404 : {location.pathname}Page is not defined!</h1>;
};
