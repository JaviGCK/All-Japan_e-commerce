import { ProductProps } from "../../types/produtc";
/**
 * 
 * @returns logic of LS to use for the cart
 */
export const getLS = () => {
  const cartProductsString = localStorage.getItem("cart-products");
  if (cartProductsString) {
    return JSON.parse(cartProductsString);
  }
  return;
};

export const addLS = (
  product: ProductProps,
  counterValue: number,
  cartProducts: ProductProps[],
  setCartProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
) => {
  if (counterValue > 0) {
    const productsToBuy = { ...product, counterValue };
    const updatedCartProducts = [...cartProducts, productsToBuy];
    setCartProducts(updatedCartProducts);
    localStorage.setItem("cart-products", JSON.stringify(updatedCartProducts));
  }
};

  
  
