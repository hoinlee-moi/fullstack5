import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  login: ReactNode;
  profile: ReactNode;
};

export default function ParalellLayout({ children, login, profile }: Props) {
  return (
    <div>
      <div>{children}</div>
      <hr />
      <div>{login}</div>
      <div>{profile}</div>
      <div>
        <Link href={'/paralell/aaa'} className='btn'>
          AAA
        </Link>
        <Link href={'/paralell/xxx'} className='btn ml-2'>
          XXX
        </Link>
      </div>
    </div>
  );
}
