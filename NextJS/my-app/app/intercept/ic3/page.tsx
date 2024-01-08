import Link from 'next/link';
import React from 'react';

export default function Ic3Page() {
  return (
    <div>
      <h1 className='mb-2'>
        <span className='text-primary'>IC 3 PAGE</span>
      </h1>
      <Link href='/about' className='btn'>
        ABOUT
      </Link>
      <Link href='/intercept/ic2' className='btn'>
        IC2
      </Link>
    </div>
  );
}
