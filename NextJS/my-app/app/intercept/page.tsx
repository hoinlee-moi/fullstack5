import Link from 'next/link';
import React from 'react';

export default function InterceptPage() {
  return (
    <div>
      <h1 className='mb-2'>InterceptPage</h1>
      <Link href='/intercept/ic1' className='btn'>
        IC1
      </Link>
      <Link href='/intercept/ic2' className='btn'>
        IC2
      </Link>
      <Link href='/intercept/ic3' className='btn'>
        IC3
      </Link>
    </div>
  );
}
