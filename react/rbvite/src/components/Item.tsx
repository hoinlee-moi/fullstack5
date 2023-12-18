import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSession } from '../hooks/session-context';
// import { useEffect } from 'react';

export const Item = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const {
    session: { cart },
  } = useSession();

  const [item, setItem] = useState<Cart>();
  useEffect(() => {
    if (state) {
      const { name, price } = state;
      setItem({ id: Number(id), name, price });
    } else {
      setItem(cart.find((item) => item.id === Number(id)));
    }
  }, []);

  // const cancleModify = () => navigate('/items');

  return (
    <div>
      <h2>{item?.name}</h2>
      <p>{item?.price.toLocaleString()}</p>
      {/* <SaveCartItemForm
        modifyItem={{ id: Number(id), name, price }}
        completeModify={cancleModify}
      /> */}
    </div>
  );
};
