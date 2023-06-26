import './ProductCard.css';
import hearth from '../../assets/img/mdi-heart (1).webp';
import { ProductProps } from '../../types/produtc';
import { FC, useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/FetchData';

export const ProductCard: FC<ProductProps> = () => {
  const jsonData = useFetchData('/src/assets/db/data.json');

  if (!jsonData) {
    return <div>Loading data...</div>;
  }
  
  const filteredProducts = jsonData.filter ((product: ProductProps) => product.class === "vegetables")

  return (
    <>
      <h2 className="products-title-page">New in</h2>
      <div className="products-div">
        {filteredProducts.map((product: ProductProps) => (
          <div className="card-product" key={product.id}>
            <img className="card-product-img" src={`/src/assets/img/${product.img}`} alt={product.name} />
            <h3 className="card-product-name">{product.name}</h3>
            <p className="card-product-description">{product.description}</p>
            <span className="card-product-weight">{product.weight}gr</span>
            <span className="card-product-price">{product.price}€</span>
            <button className="card-product-button" type="button">
              <img className="card-product-button-hearth" src={hearth} alt="fav_button" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
