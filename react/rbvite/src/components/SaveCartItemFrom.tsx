import { FormEvent, useEffect, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';

type Props = {
  modifyItem: Cart | null;
  completeModify: () => void;
};

const SaveCartItemForm = ({ modifyItem, completeModify }: Props) => {
  const { saveCartItem } = useSession();
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (itemNameRef.current && itemPriceRef.current && modifyItem) {
      itemNameRef.current.value = modifyItem.name;
      itemPriceRef.current.value = '' + modifyItem.price;
    }
  }, [modifyItem]);

  const [isDirty, setDirty] = useState(false);
  const dirtyCheck = () => {
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    const item = modifyItem || { name: '', price: '' };
    setDirty(name !== item.name || price != item.price);
  };
  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modifyItem) changeCartItem();
    else addCartItemSubmit();
  };

  const changeCartItem = () => {
    if (modifyItem && itemNameRef.current && itemPriceRef.current) {
      const { id } = modifyItem;
      const name = itemNameRef.current.value;
      const price = itemPriceRef.current.value;
      saveCartItem({ id, name, price: Number(price) });
      completeModify();
    }
  };

  const addCartItemSubmit = () => {
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
    saveCartItem({ id: 0, name, price: Number(price) });
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
    itemNameRef.current.focus();
    setDirty(false);
  };

  const descriptionStr = modifyItem ? '수정' : '추가';

  return (
    <form onSubmit={submitHandle}>
      <div>
        {descriptionStr}할 상품 이름 :{' '}
        <input
          type='text'
          ref={itemNameRef}
          defaultValue={modifyItem?.name}
          onChange={dirtyCheck}
        />
      </div>
      <div>
        {descriptionStr}할 상품 가격 :{' '}
        <input
          type='number'
          ref={itemPriceRef}
          defaultValue={modifyItem?.price}
          onChange={dirtyCheck}
        />
      </div>
      {isDirty && <button type='submit'>{descriptionStr}</button>}
      {modifyItem && <button onClick={completeModify}>취소</button>}
    </form>
  );
};

export default SaveCartItemForm;
