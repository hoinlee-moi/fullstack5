import { FormEvent, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';

type Props = {
  id: number;
  successModify: () => void;
};

const ModifyCartItemForm = ({ id, successModify }: Props) => {
  const {
    session: { cart },
    modifyCartItem,
  } = useSession();
  const targetItem = cart.find((item) => item.id === id);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
  const modifyBtnRef = useRef<HTMLButtonElement>(null);
  // const [changeState, setChangeState] = useState<boolean>(false);
  const modifyHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = itemNameRef.current?.value || '';
    const price = itemPriceRef.current?.value || '0';
    modifyCartItem({ id, name, price: Number(price) });
    successModify();
  };
  const checkChangedItem = () => {
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    if (targetItem?.name !== name || targetItem?.price !== Number(price)) {
      modifyBtnRef.current!.style.visibility = 'visible';
      // setChangeState(true);
      return;
    }
    modifyBtnRef.current!.style.visibility = 'hidden';
    // setChangeState(false);
  };
  return (
    <form onSubmit={modifyHandle}>
      <div>
        수정할 상품 이름 :{' '}
        <input
          type='text'
          ref={itemNameRef}
          defaultValue={targetItem && targetItem.name}
          onChange={checkChangedItem}
        />
      </div>
      <div>
        수정할 상품 가격 :{' '}
        <input
          type='number'
          ref={itemPriceRef}
          defaultValue={targetItem && targetItem.price}
          onChange={checkChangedItem}
        />
      </div>
      <button type='submit' style={{ visibility: 'hidden' }} ref={modifyBtnRef}>
        수정완료
      </button>
    </form>
  );
};

export default ModifyCartItemForm;
