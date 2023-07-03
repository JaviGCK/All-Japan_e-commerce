import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductProps } from '../../types';
import { useCartEffects } from '../../useeffects';
/**
 * 
 * show up a completed purchase and redirected to HomePage to start again shopping
 */
export const Thanks = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
  const productToRender = cartProducts;

  useCartEffects(cartProducts, setCartProducts);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <section>
      <h3>Thanks for your purchase</h3>
      <p>Your purchase has been successfully completed</p>
    <div>
      {productToRender.map((product: ProductProps, index: number) => {
            return (
              <div key={index}>
                <img src={`/src/assets/img/${product.img}`} alt={product.name} />
                <h4>{product.name}</h4>
							<p>
								<span>Uds: {product.counterValue} | </span>
								<span>Price: {product.price}€</span>
							</p>
              </div> 
            );
          })}
          </div>
    </section>
  );
};



