// useCartEffects.js
import { useEffect } from 'react';
import { getLS } from '../function/cartUtils';


export const useCartEffects = (cartProducts: {}[], setCartProducts: React.Dispatch<React.SetStateAction<{}[]>>) => {
  useEffect(() => {
    const storedCartProducts = getLS();
    if (storedCartProducts) {
      setCartProducts(storedCartProducts);
    }
  }, [setCartProducts]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      localStorage.setItem('cart-products', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
};

