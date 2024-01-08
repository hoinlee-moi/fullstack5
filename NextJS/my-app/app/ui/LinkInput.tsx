'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef } from 'react';

export default function LinkInput() {
  const router = useRouter();
  const idInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('strict!!!!');
  }, []);

  const linkPushRouter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idInputRef.current) {
      const id = idInputRef.current.value;
      router.push(`/dynamic/todos/${id}`);
    }
  };
  return (
    <form onSubmit={linkPushRouter}>
      <input
        type='text'
        ref={idInputRef}
        className='border border-solid border-black p-1'
      />
      <button type='submit' className='ml-2 py-1 px-2 bg-red-300 rounded'>
        show
      </button>
    </form>
  );
}
