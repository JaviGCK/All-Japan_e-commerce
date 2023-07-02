import { Cart } from "../components/cart/Cart";
import { ProductsProvider } from "../context/index";

export const CartPage= () => {
  
  return (
    <ProductsProvider>
      <Cart  /> 
    </ProductsProvider>
  );
};
