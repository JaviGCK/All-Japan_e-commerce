import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/index";
import { ProductProps } from "../../types/produtc";
import { DetailCard } from "./DetailCard";
import { CounterApp } from "../counter/CounterApp";
import { addLS } from "../../utils/function/cartUtils";
import { fetchEffect, useCartEffects } from "../../useeffects/index";

/**
 * Shows the detail view of a product. Receives the product list, gets the product ID from the URL, and displays the detailed product information. Allows the user to adjust the quantity of the product and add it to the shopping cart.
 */
export const ProductDetail = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);

  const { products } = useContext(ProductsContext);
  if (products === null) return null;

  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  if (!product) return null;

  const updateCounterValue = (value: number) => {
    setCounterValue(value);
  };

  fetchEffect();
  useCartEffects(cartProducts, setCartProducts);

  const handleAddLS = () => {
    addLS(product, counterValue, cartProducts, setCartProducts);
    setCounterValue(0);
  };

  return (
    <div>
      {product && <DetailCard {...product} key={product.id} />}
      <CounterApp
        addLS={handleAddLS}
        counterValue={counterValue}
        updateCounterValue={updateCounterValue}
        product={product}
      />
      
    </div>
  );
};
