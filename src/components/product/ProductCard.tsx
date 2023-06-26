import './ProductCard.css';
import hearth from '../../assets/img/mdi-heart (1).webp';
import { ProductProps } from '../../types/produtc';
import { FC, useEffect, useState } from 'react';


export const ProductCard: FC<ProductProps> = () => {
  const [jsonData, setJsonData] = useState<ProductProps[] | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('/src/assets/db/data.json');
        if (!response) throw new Error('Error getting data from JSON file')
        const fetchedData = await response.json();
        setJsonData(fetchedData.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!jsonData) {
    return <div>Loading data...</div>;
  } 

  return (
    <div className="products-div">
      {jsonData.map((product: ProductProps) => (
        <div className="card-product" key={product.id}>
          <img className="card-product-img" src={`/src/assets/img/${product.img}`} alt={product.name} />
          <h3 className="card-product-name">{product.name}</h3>
          <p className="card-product-description">{product.description}</p>
          <span className="card-product-weight">{product.weight}gr</span>
          <span className="card-product-price">{product.price}€</span>
          <button className="card-product-button">
            <img className="card-product-button-hearth" src={hearth} alt="fav_button" />
          </button>
        </div>
      ))}
    </div>
  );
};
