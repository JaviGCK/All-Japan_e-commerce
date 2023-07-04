import { ProductProps } from '../../types/produtc';
import { FC } from 'react';
import { ImgProduct, Links, SpanProduct, Wrapp } from '../style';
/**
 * 
 * @param  Props from Porduct
 * @returns a card with all element we need to show the product.
 * 
 */
export const ProductCard: FC<ProductProps> = ({ id, img, name, description, weight, price }) => {
  return (
    <Links to={`/detail/${id}`}>
      <Wrapp CardProduct>
        <ImgProduct src={`/src/assets/img/${img}`} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{weight}gr</span>
        <SpanProduct>{price}€</SpanProduct>
      </Wrapp >
    </Links>
  );
};

