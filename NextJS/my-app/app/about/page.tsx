'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [name, setName] = useState('');
  return (
    <div>
      This is AboutPage
      <h2>Name : {name}</h2>
      <div>
        <button className='btn' onClick={() => setName('!!!')}>
          BTN1
        </button>
        <button disabled={!!name} className='btn'>
          BTN2
        </button>
      </div>
    </div>
  );
}
