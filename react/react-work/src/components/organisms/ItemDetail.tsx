import Label from '../atoms/Label';

const ItemDetail = () => {
  return (
    <article>
      <div>
        <Label content='상품 이름 :' />
      </div>
      <div>
        <Label content='상품 가격 :' />
      </div>
      <div>
        <Label content='상품 설명 :' />
      </div>
    </article>
  );
};

export default ItemDetail;
