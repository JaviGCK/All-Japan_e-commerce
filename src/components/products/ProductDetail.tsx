import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContext";
import { DetailCard } from "./DetailCard";
import { CounterApp } from "../counter/CounterApp";
import { addLS, getLS } from "../../utils/function/cartUtils";
import { FetchEffect } from "../../utils/useeffects/FetchEffect";

export const ProductDetail = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [cartProducts, setCartProducts] = useState<{}[]>([]);

  const updateCounterValue = (value: number) => {
    setCounterValue(value);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const { products } = useContext(ProductsContext);
  if (products === null) return null;

  FetchEffect();

  useEffect(() => {
    const storedCartProducts = getLS();
    if (storedCartProducts) {
      setCartProducts(storedCartProducts);
    }
  }, []);

  useEffect(() => {
    if (cartProducts.length > 0) {
      localStorage.setItem("cart-products", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  const product = products.find((product) => product.id === id);

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
