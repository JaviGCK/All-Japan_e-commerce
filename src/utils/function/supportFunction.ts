import { ProductProps } from "../../types/produtc";

export function filterProduct (filter: string, allProducts: ProductProps[]) {
    if(allProducts === null) return;
    if(filter === "all products") return allProducts;
    if(filter === "vegetables" || filter === "noodles" || filter === "tea") {
    const filteredProducts = allProducts.filter((product: ProductProps) => product.class === filter)
    return filteredProducts 
} else {
    const filteredProducts = allProducts.filter((product: ProductProps) => product.section === filter) 
    return filteredProducts;
}
}