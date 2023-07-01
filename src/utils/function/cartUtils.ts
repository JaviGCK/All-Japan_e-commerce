export const getLS = () => {
    const cartProductsString = localStorage.getItem("cart-products");
    if (cartProductsString) {
      return JSON.parse(cartProductsString);
    }
    return [];
  };
  
  export const addLS = (
    product: any,
    counterValue: number,
    cartProducts: {}[],
    setCartProducts: (cartProducts: {}[]) => void
  ) => {
    const productsToBuy = { product, counterValue };
    const updatedCartProducts = [...cartProducts, productsToBuy];
    setCartProducts(updatedCartProducts);
  };
  
