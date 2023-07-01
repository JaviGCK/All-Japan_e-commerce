import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { getFetchData } from "../../api/function/FetchData";

export function fetchEffect() {
    const { changeProducts } = useContext(ProductsContext);

    useEffect(() => {
        
        const fetchData = async () => {
            const newProducts = await getFetchData();
            changeProducts(newProducts);
        };
        fetchData();
    }, []);
}
