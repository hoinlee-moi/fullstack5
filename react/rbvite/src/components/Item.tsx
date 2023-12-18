import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SaveCartItemForm from './SaveCartItemFrom';
// import { useEffect } from 'react';

export const Item = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { name, price } = useLocation().state;

  const cancleModify = () => navigate('/items');

  return (
    <>
      <h2>{name}</h2>
      <p>{price.toLocaleString()}</p>
      <SaveCartItemForm
        modifyItem={{ id: Number(id), name, price }}
        completeModify={cancleModify}
      />
    </>
  );
};
