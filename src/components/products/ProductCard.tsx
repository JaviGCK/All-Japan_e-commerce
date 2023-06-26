import './ProductCard.css';
import hearth from '../../assets/img/mdi-heart (1).webp';
import { ProductProps } from '../../types/produtc';
import { FC } from 'react';

export const ProductCard: FC<ProductProps> = (props) => {

  return (
    <>
      <h2 className="products-title-page">New in</h2>
      <div className="products-div">
       
          <div className="card-product" key={props.id}>
            <img className="card-product-img" src={`/src/assets/img/${props.img}`} alt={props.name} />
            <h3 className="card-product-name">{props.name}</h3>
            <p className="card-product-description">{props.description}</p>
            <span className="card-product-weight">{props.weight}gr</span>
            <span className="card-product-price">{props.price}€</span>
            <button className="card-product-button" type="button">
              <img className="card-product-button-hearth" src={hearth} alt="fav_button" />
            </button>
          </div>
        )
      </div>
    </>
  );
};
