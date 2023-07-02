import { createContext, useState } from "react";
import { ProductProps } from "../types/produtc";
/**
 * Manage the status of the products. It uses the useState hook to store a list of products and provides a changeProducts function to update that list.
 */
export const ProductsContext = createContext({
  products: [] as ProductProps[],
  changeProducts: (product: ProductProps[]): void => {}
});

export function ProductsProvider(props: any) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const changeProducts = (newProducts: ProductProps[]) => {
    setProducts(newProducts);
  }
  

  return (
    <ProductsContext.Provider value={{
      products,
      changeProducts
    }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
