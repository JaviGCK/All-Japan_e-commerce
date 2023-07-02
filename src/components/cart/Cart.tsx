import { useState } from "react";
import { ProductProps } from "../../types/produtc";
import { useCartEffects } from "../../useeffects/useCartEffects";
import { getTotalPrice } from "../../utils/function/getTotalPrice";
import { Link } from "react-router-dom";

export const Cart = () => {
    const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
    const productToRender = cartProducts;
  
    useCartEffects(cartProducts, setCartProducts);
  
    return (
      <section>
        <h2>Your products</h2>
        
          {productToRender.map((product: ProductProps, index: number) => {
            return (
              <div key={index}>
                <img src={`/src/assets/img/${product.img}`} alt={product.name} />
                <h4>{product.name}</h4>
							<p>
								<span>Uds: {product.counterValue} | </span>
								<span>Price: {product.price}€</span>
							</p>
              </div> 
            );
          })}

        <div>
					<h2>Total: {getTotalPrice(cartProducts)}€</h2>
				</div>
        <Link to={"/"}>
          Go Home
        </Link>
        <Link to={"/register"}>
          Checkout
        </Link>
      </section>
    );
  };
  