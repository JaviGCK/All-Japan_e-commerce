import { useContext } from "react";
import { ProductProps } from "../../types/produtc";
import { ProductCard } from "./index";
import { filterProduct } from "../../utils/function/supportFunction";
import { ProductsContext, FilterContext } from "../../context/index"; 
import { fetchEffect } from '../../useeffects/fetchEffect';
import { WrappProduct } from '../style';
/**
 * 
 * @returns Displays a section of products filtered based on the selected filter option. It uses the ProductsContext and FilterContext contexts to get the products and the current filter, respectively. Then, it renders the product cards corresponding to the filtered products.
 */
 
export const Products = () => {

  const { products } = useContext(ProductsContext);
  const { filter } = useContext(FilterContext);

  fetchEffect();
  
  if (products === null) return null;
  
  const filteredProducts: ProductProps[] | undefined = filterProduct(filter, products);
  if (filteredProducts === undefined) return null;
  
  return (
    <section>
      <h2 className="products-title-page">{filter.toUpperCase()}</h2>
      <WrappProduct>
      {filteredProducts.map((product) => {
        return <ProductCard{...product} key={product.id}/>;
      })}
      </WrappProduct>
    </section>
  );
}
