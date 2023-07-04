import './Header.css'
import logo from '../../assets/img/logo-all-japan.webp'
import cart from '../../assets/img/solar_cart-large-2-outline.webp'
import { CART, LOGIN, LOGOUT } from '../../config/routes/path'
import { useAuthContext } from '../../context'
import { Logo, LogoName, WrapperBody, WrapperTop, CartLink, LoginLink } from '../style'

export const Header = () => {
    const { isAuthentificated } = useAuthContext();

    return (
        <header>
            <WrapperTop>
                {isAuthentificated ? (
                    <LoginLink to={LOGOUT}>Logout</LoginLink>
                ) : (
                    <LoginLink to={LOGIN}>Login</LoginLink>
                )}
                <Logo src={logo} alt="logo" />
                <LogoName>All Japan</LogoName>
            </WrapperTop>
            <WrapperBody>
                <CartLink to={CART} className="header-cart">
                    <img src={cart} alt="cart" />
                </CartLink>

            </WrapperBody>
        </header>
    )
}