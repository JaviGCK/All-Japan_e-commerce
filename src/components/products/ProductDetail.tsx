import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContext";
import { DetailCard } from "./DetailCard";
import { CounterApp } from "../counter/CounterApp";
import { addLS } from "../../utils/function/cartUtils";
import { useCartEffects } from "../../utils/useeffects/useCartEffects";
import { fetchEffect } from "../../utils/useeffects/FetchEffect";

export const ProductDetail = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [cartProducts, setCartProducts] = useState<{}[]>([]);
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  if (products === null) return null;

  const product = products.find((product) => product.id === id);

  const updateCounterValue = (value: number) => {
    setCounterValue(value);
  };

  const onNavigateBack = () => {
    navigate(-1);
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
