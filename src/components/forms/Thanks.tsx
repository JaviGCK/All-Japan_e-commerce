import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductProps } from '../../types';
import { useCartEffects } from '../../useeffects';
import { H2, ImgProduct, Wrapp, WrappSection } from '../style';
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
    <WrappSection>
      <H2>Thanks for your purchase</H2>
        {productToRender.map((product: ProductProps, index: number) => {
          return (
            <Wrapp $cart key={index}>
              <ImgProduct src={`/src/assets/img/${product.img}`} alt={product.name} />
              <h4>{product.name}</h4>
            </Wrapp>
          );
        })}
        <H2><span>Congratulations</span>your purchase has been successfully completed!!</H2>
    </WrappSection>
  );
};



