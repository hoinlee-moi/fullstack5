import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSession } from '../../hooks/session-context';
import Label from '../atoms/Label';
import LabelContent from '../molecules/LabelContent';
import { useEffect, useState } from 'react';
import { DUMMYITMES } from '../../DUMMY/dummyItem';

const ItemDetail = () => {
  const {
    session: { cart },
  } = useSession();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const shopOrCart = pathname === '/shop';
  const [params] = useSearchParams();
  const cartItemId = params.get('id');
  const [item, setItem] = useState<CartItem | null>(cart[0]);

  useEffect(() => {
    if (shopOrCart) setItem(null);
  }, [pathname]);

  useEffect(() => {
    if (cartItemId) {
      const item = shopOrCart
        ? DUMMYITMES.find((item) => item.id === +cartItemId)
        : cart.find((item) => item.id === +cartItemId);
      if (item) setItem(item);
      else navigate(shopOrCart ? '/shop' : '/cart');
    }
  }, [cart, cartItemId]);

  return (
    <article>
      {item ? (
        <>
          <LabelContent title='상품 이름 :' content={item?.name} />
          <LabelContent title='상품 가격 :' content={'' + item.price} />
          <Label content='상품 설명' className='p-1' />
          <p className='p-1'>{item.description}</p>
        </>
      ) : (
        <h2 className='text-center font-black text-xl'>
          {shopOrCart ? 'Please select an item' : 'CART IS EMPTY!'}
        </h2>
      )}
    </article>
  );
};

export default ItemDetail;
