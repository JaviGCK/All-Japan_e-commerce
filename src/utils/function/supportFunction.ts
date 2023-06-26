import { json } from "react-router-dom";
import { useFetchData } from "../../api/function/FetchData";
import { ProductProps } from "../../types/produtc";

export function filterProduct (filter: string) {
    const allProducts = useFetchData();
    if(allProducts === null) return;
    if(filter === "vegetables/" || filter === "noodles/" || filter === "tea/") {
    const filteredProducts = allProducts.filter((product: ProductProps) => product.class === filter)
    return filteredProducts 
} else {
    const filteredProducts = allProducts.filter((product: ProductProps) => product.section === filter) 
    return filteredProducts
}
}