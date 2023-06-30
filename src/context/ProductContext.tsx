import { createContext, useState } from "react";
import { ProductProps } from "../types/produtc";

export const ProductsContext = createContext({
  products: [] as ProductProps[],
  changeProducts: (products: ProductProps[]): void => {}
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
