import { FormEvent, useRef } from 'react';
import { useSession } from '../hooks/session-context';

const SaveCartItemForm = () => {
  const { saveCartItem } = useSession();
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const addCartItemSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    if (!name) {
      alert('상품명을 정확히 입력해주세요');
      return itemNameRef.current?.focus();
    }
    if (!price || price === '0') {
      alert('상품 가격을 정확히 입력해주세요');
      return itemPriceRef.current?.focus();
    }
    saveCartItem({ name, price: Number(price) });
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
  };
  return (
    <form onSubmit={addCartItemSubmit}>
      <div>
        추가할 상품 이름 : <input type='text' ref={itemNameRef} />
      </div>
      <div>
        추가할 상품 가격 : <input type='number' ref={itemPriceRef} />
      </div>
      <button type='submit'>추가</button>
    </form>
  );
};

export default SaveCartItemForm;
