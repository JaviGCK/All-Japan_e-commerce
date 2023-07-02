import { useEffect } from "react";
import { getLS } from "../utils/function/cartUtils";

export const useCartEffects = (cartProducts: {}[], setCartProducts: any) => {
  useEffect(() => {
    const storedCartProducts = getLS();
    if (storedCartProducts) {
  
      setCartProducts([...storedCartProducts]);
    }
  }, [setCartProducts]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      localStorage.setItem('cart-products', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
};



