import clsx from 'clsx';
import { FormEvent, useRef, useState } from 'react';

const FileDown = () => {
  const [text, setText] = useState('');
  const txtInputRef = useRef<HTMLInputElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const createTxt = (e: FormEvent) => {
    e.preventDefault();
    if (txtInputRef.current && anchorRef.current) {
      const aEle = anchorRef.current;
      const inputText = txtInputRef.current.value;
      setText(inputText);
      const fileName = 'test.txt';
      const file = new Blob([inputText], {
        type: 'text/plain',
      });
      aEle.href = URL.createObjectURL(file);
      aEle.download = fileName;
    }
  };
  return (
    <div className='w-96 min-h-96 bg-slate-400'>
      <h1>파일 다운로드</h1>
      <p className='w-full break-words'>{text}</p>

      <button className={clsx('m-2', { hidden: text === '' })}>
        <a href='' ref={anchorRef}>
          텍스트 파일 다운
        </a>
      </button>

      <form action='submit' onSubmit={createTxt}>
        <input type='text ' className='m-2' ref={txtInputRef} />
        <br />
        <button className='m-2'>텍스트 입력하기</button>
      </form>
      <button className='dkdkdkdkk' />
    </div>
  );
};

export default FileDown;
