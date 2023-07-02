import { Cart } from "../components/cart/Cart";
import { ProductsProvider } from "../context/ProductContext";

export const CartPage= () => {
  
  return (
    <ProductsProvider>
      <Cart  /> 
    </ProductsProvider>
  );
};
