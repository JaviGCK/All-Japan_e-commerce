import { Filter } from "../components/filter/Filter";
import { Products } from "../components/products/Products";
import { FC } from "react";

export const HomePage:FC = () => {
    
    return (
        <>
            <Filter />
            <Products />
        </>
       
    );
};



