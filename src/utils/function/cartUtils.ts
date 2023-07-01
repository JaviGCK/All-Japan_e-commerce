export const cartProducts: {}[] = [];

export const addLS = (product: any, counterValue: number) => {
    const productsToBuy = { product, counterValue };
    cartProducts.push(productsToBuy);

    if (product) {
        localStorage.setItem("cart-products", JSON.stringify(cartProducts));
    }
};
