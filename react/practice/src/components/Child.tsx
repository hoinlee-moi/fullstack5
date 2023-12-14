import { RefObject, useImperativeHandle, useRef } from 'react';

const Child = ({
  childRef,
}: {
  childRef: RefObject<{ focusFn: () => void }>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusFn = () => {
    alert('보내지네>');
  };
  useImperativeHandle(childRef, () => ({ focusFn }));

  return <input type='text' ref={inputRef} />;
};

export default Child;
