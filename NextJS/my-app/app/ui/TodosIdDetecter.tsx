'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Todo } from '../(myroutes)/dynamic/todos/[...id]/page';

export default function TodosIdDetecter({ todos }: { todos: Todo[] }) {
  const router = useRouter();
  useEffect(() => {
    if (todos.length === 0) {
      router.push('/dynamic/todos');
    }
  }, [todos.length, router]);

  return <></>;
}
