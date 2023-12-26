import { useOutletContext } from 'react-router-dom';
import { useReducer } from 'react';
import './ItemLayout.css';
import SaveCartItemForm from './SaveCartItemFrom';
import clsx from 'clsx';

export const Item = () => {
  const { currItem, deleteCartItem } = useOutletContext<OutletContext>();

  const [isEditing, setEditing] = useReducer((prev) => !prev, false);

  const deleteItem = () => {
    deleteCartItem(currItem.id);
  };

  return (
    <div>
      {currItem ? (
        <div className={clsx('detailItem')}>
          {isEditing ? (
            <SaveCartItemForm
              modifyItem={currItem}
              completeModify={setEditing}
            />
          ) : (
            <div>
              <h2>name : {currItem?.name}</h2>
              <p>price : {currItem?.price.toLocaleString()}</p>

              <div>
                <button onClick={setEditing}>수정하기</button>
                <button onClick={deleteItem}>삭제하기</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <h2>No sellected item!</h2>
      )}
    </div>
  );
};
