import './ProductCard.css';
import { ProductProps } from '../../types/produtc';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const ProductCard: FC<ProductProps> = (props) => {

  return (

    <Link to={`/detail/${props.id}`} className="card-product-link">
          <div className="card-product">
            <img className="card-product-img" src={`/src/assets/img/${props.img}`} alt={props.name} />
            <h3 className="card-product-name">{props.name}</h3>
            <p className="card-product-description">{props.description}</p>
            <span className="card-product-weight">{props.weight}gr</span>
            <span className="card-product-price">{props.price}€</span>
          </div>
    </Link>
  );
};
