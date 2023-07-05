import { useState } from "react";
import { ProductProps } from "../../types/produtc";
import { useCartEffects } from "../../useeffects/useCartEffects";
import { getTotalPrice } from "../../utils/function/getTotalPrice";
import { Button, H2, ImgProduct, Links, Wrapp, WrappSection } from "../style";

export const Cart = () => {
    const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
    const productToRender = cartProducts;
  
    useCartEffects(cartProducts, setCartProducts);
  
    return (
      <WrappSection $cart>
        <Wrapp $carttitle>
        <H2>Your cart</H2>
        </Wrapp>
          {productToRender.map((product: ProductProps, index: number) => {
            return (
              <Wrapp $cart key={index}>
                <ImgProduct src={`/src/assets/img/${product.img}`} alt={product.name} />
                <h4>{product.name}</h4>
							<p>
								<span>Uds: {product.counterValue} | </span>
								<span>Price: {product.price}€</span>
							</p>
              </Wrapp> 
            );
          })}

        <Wrapp $cart>
					<h2>Total: {getTotalPrice(cartProducts)}€</h2>
				</Wrapp>
        <Button>
        <Links $login to={"/checkout"}>
          Checkout
        </Links>
        </Button>
        <Button>
        <Links $login to={"/"}>
          Continue Shopping
        </Links>
        </Button>
      </WrappSection>
    );
  };
  