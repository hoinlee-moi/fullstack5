import { useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ItemLayout.css';
import SaveCartItemForm from './SaveCartItemFrom';
import clsx from 'clsx';

export const Item = () => {
  const navigate = useNavigate();
  const { currItem, deleteCartItem } = useOutletContext<OutletContext>();

  const [modify, setModify] = useState(false);
  const [addCartState, setAddCartState] = useState(false);

  const cancleAddCart = () => setAddCartState(false);
  const startAddCart = () => setAddCartState(true);
  const startModify = () => setModify(true);
  const cancelModify = () => setModify(false);

  const deleteItem = () => {
    deleteCartItem(currItem.id);
    navigate('/items');
  };

  useEffect(() => {
    if (!currItem) {
      navigate('/items');
    }
  }, [currItem]);

  return (
    <div>
      {addCartState ? (
        <SaveCartItemForm modifyItem={null} completeModify={cancleAddCart} />
      ) : (
        <div>
          {modify ? (
            <SaveCartItemForm
              modifyItem={currItem}
              completeModify={cancelModify}
            />
          ) : (
            <div className={clsx('detailItem')}>
              <div>
                <h2>name : {currItem?.name}</h2>
                <p>price : {currItem?.price.toLocaleString()}</p>
              </div>

              <button onClick={startModify}>수정하기</button>
              <button onClick={startAddCart}>추가하기</button>
              <button onClick={deleteItem}>삭제하기</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
