import './Product.css'
import { ProductProps } from "../../types/produtc";
import { ProductCard } from "./ProductCard";
import { filterProduct } from "../../utils/function/supportFunction";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductContext"; 
import { getFetchData } from "../../api/function/FetchData";
import { FilterContext } from "../../context/FilterContext";
 
export const Products = () => {

  const { products, changeProducts } = useContext(ProductsContext);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = await getFetchData();
      changeProducts(newProducts);
    };
    fetchData();
  }, []);
  
  if (products === null) return null;
  
  const filteredProducts: ProductProps[] | undefined = filterProduct(filter, products);
  if (filteredProducts === undefined) return null;
  
  return (
    <section>
      <h2 className="products-title-page">{filter.toUpperCase()}</h2>
      <div className="products-section">
      {filteredProducts.map((product) => {
        return <ProductCard{...product} key={product.id}/>;
      })}
      </div>
    </section>
  );
}
