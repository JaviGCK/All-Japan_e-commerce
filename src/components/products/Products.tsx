import { ProductProps } from "../../types/produtc"
import { ProductCard } from "./ProductCard"
import { filterProduct } from "../../utils/function/supportFunction"

export const Products = (props: ProductProps) => {
const filteredProducts: ProductProps[] | undefined = filterProduct(props.name)
if(filteredProducts === undefined) return;
  return (
    <>
    {filteredProducts.map((product:ProductProps) => {
        <ProductCard {...props}/>
    })}
    </>
  )
}
