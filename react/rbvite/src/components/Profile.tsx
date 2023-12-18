// src/components/Profile.tsx

import { useSession } from '../hooks/session-context';

const Profile = () => {
  const {
    session: { loginUser },
    logout,
  } = useSession();

  return (
    <>
      <div>
        <p>User Name: {loginUser?.name}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
export default Profile;
