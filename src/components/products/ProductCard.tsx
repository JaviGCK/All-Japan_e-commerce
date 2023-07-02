import './ProductCard.css';
import { ProductProps } from '../../types/produtc';
import { FC } from 'react';
import { Link } from 'react-router-dom';
/**
 * 
 * @param  Props from Porduct
 * @returns a card with all element we need to show the product.
 * 
 */
export const ProductCard: FC<ProductProps> = ({ id, img, name, description, weight, price }) => {
  return (
    <Link to={`/detail/${id}`} className="card-product-link">
      <div className="card-product">
        <img className="card-product-img" src={`/src/assets/img/${img}`} alt={name} />
        <h3 className="card-product-name">{name}</h3>
        <p className="card-product-description">{description}</p>
        <span className="card-product-weight">{weight}gr</span>
        <span className="card-product-price">{price}€</span>
      </div>
    </Link>
  );
};

