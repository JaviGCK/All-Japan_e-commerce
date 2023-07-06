import logo from '../../assets/img/logo-all-japan.webp';
import cart from '../../assets/img/solar_cart-large-2-outline.webp';
import home from '../../assets/img/home.png';
import { CART, HOME, LOGIN, LOGOUT } from '../../config/routes/path';
import { useAuthContext } from '../../context';
import { H1Logo, Button, Wrapp, Links, ImgLogo, ImgHome, SpanCart } from '../style';
import { useState } from 'react';
import { ProductProps } from '../../types';
import { useCartEffects } from '../../useeffects';
/**
 * 
 * @returns header elements with logo & name and cart counter to show you the product you have on a cart and link to home page
 */
export const Header = () => {
    const { isAuthentificated } = useAuthContext();

    const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
    useCartEffects(cartProducts, setCartProducts);

    let itemCount: number | null = null;

    if (cartProducts.length === 0) {
        itemCount = null;
    } else {
        itemCount = cartProducts.length;
    }


    return (
        <header>
            <Wrapp $Top>
                <Button $login={true}>
                    {isAuthentificated ? (
                        <Links $login to={LOGOUT}>Logout</Links>
                    ) : (
                        <Links $login to={LOGIN}>Login</Links>
                    )}
                </Button>
                <ImgLogo src={logo} alt="logo" />
                <H1Logo>All Japan</H1Logo>
            </Wrapp>
            <Wrapp $Body>
                <Links to={HOME}>
                    <ImgHome src={home} alt="home" />
                </Links>
                <SpanCart>{itemCount}</SpanCart>
                <Links $cart to={CART}>
                    <img src={cart} alt="cart" />
                </Links>
            </Wrapp>
        </header>
    );
};
