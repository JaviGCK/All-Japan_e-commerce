import { ProductProps } from "../../types/produtc";

export const getTotalPrice = (array: ProductProps[]) => {

    let totalPrice = 0;

    array.forEach((product) => {

        if (product.counterValue === undefined) return;
        totalPrice += product.price * product.counterValue;

    })
    return totalPrice;
}