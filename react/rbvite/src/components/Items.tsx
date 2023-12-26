// import { useOutletContext } from 'react-router-dom';
// import SaveCartItemForm from './SaveCartItemFrom';
// import { useEffect, useState } from 'react';

// export const Items = () => {
//   const { currItem } = useOutletContext<OutletContext>();
//   const [item, setItem] = useState<Cart | null>(currItem);

//   const modifyCom = () => setItem(null);

//   useEffect(() => {
//     setItem(currItem);
//   }, [currItem]);

//   return <SaveCartItemForm modifyItem={item} completeModify={modifyCom} />;
// };
