import { useRef } from 'react';
import Modal from '../organisms/Modal';

const Home = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalOpen = () => {
    if (modalRef.current) modalRef.current.showModal();
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]'>
      <h1>Welcome shopping center!</h1>
      <button className='mt-3 p-2' onClick={modalOpen}>
        Modal open
      </button>
      <Modal ref={modalRef} />
    </div>
  );
};

export default Home;
