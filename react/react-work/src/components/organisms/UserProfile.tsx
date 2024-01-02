import { useNavigate } from 'react-router-dom';
import { useSession } from '../../hooks/session-context';
import Button from '../atoms/Button';
import LabelContent from '../molecules/LabelContent';
import { useLayoutEffect } from 'react';

const UserProfile = () => {
  const {
    session: { user },
    logout,
  } = useSession();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!user) navigate('/login');
  }, [user]);
  return (
    <article>
      <div>
        <LabelContent
          title='ID :'
          content={'' + user?.id ?? ''}
          fontClass='text-xl'
        />
        <LabelContent
          title='NAME :'
          content={user?.name ?? ''}
          fontClass='text-xl'
        />
      </div>
      <div className='text-center'>
        <Button detail='LOGOUT' className='m-auto' onClick={logout} />
      </div>
    </article>
  );
};

export default UserProfile;
