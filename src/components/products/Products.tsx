import { useContext } from "react";
import { ProductProps } from "../../types/produtc";
import { ProductCard } from "./index";
import { filterProduct } from "../../utils/function/supportFunction";
import { ProductsContext, FilterContext } from "../../context/index"; 
import { fetchEffect } from '../../useeffects/fetchEffect';
import { H2, Wrapp } from '../style';
/**
 * 
 * @returns Displays a section of products filtered based on the selected filter option. It uses the ProductsContext and FilterContext contexts to get the products and the current filter, respectively. Then, it renders the product cards corresponding to the filtered products.
 */
 
export const Products = () => {

  const { products } = useContext(ProductsContext);
  const { filter } = useContext(FilterContext);

  fetchEffect();
  
  if (products === null) return;
  
  const filteredProducts: ProductProps[] | undefined = filterProduct(filter, products);
  if (filteredProducts === undefined) return;
  
  return (
    <section>
      <H2>{filter.toUpperCase()}</H2>
      <Wrapp $ContainerProduct>
      {filteredProducts.map((product) => {
        return <ProductCard{...product} key={product.id}/>;
      })}
      </Wrapp>
    </section>
  );
}
