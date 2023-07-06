import { ProductProps } from "../../types/produtc";
/**
 * 
 * @param array recived a array empty 
 * @returns the total price of the selected product
 */
export const getTotalPrice = (array: ProductProps[]) => {

    let totalPrice = 0;

    array.forEach((product) => {

        if (product.counterValue === undefined) return;
        totalPrice += product.price * product.counterValue;

    })
    return totalPrice;
}