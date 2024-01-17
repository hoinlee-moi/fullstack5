import { ForwardedRef, RefObject, forwardRef } from 'react';

const Modal = forwardRef((props, ref: ForwardedRef<HTMLDialogElement>) => {
  const closeModal = () => {
    const modal = ref as RefObject<HTMLDialogElement>;
    if (modal.current) modal.current.close();
  };
  return (
    <dialog className='modal' ref={ref}>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click the button below to close</p>
        <div className='modal-action'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button type='button' onClick={closeModal}>
              닫기!!!!
            </button>
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
