import logo from '../../assets/img/logo-all-japan.webp'
import cart from '../../assets/img/solar_cart-large-2-outline.webp'
import { CART, LOGIN, LOGOUT } from '../../config/routes/path'
import { useAuthContext } from '../../context'
import { WrapperBody, WrapperTop, LinkLogin, H1Logo, LinkCart, ImgLogo, Button } from '../style'

export const Header = () => {
    const { isAuthentificated } = useAuthContext();

    return (
        <header>
            <WrapperTop>
            <Button $login={true}>
                {isAuthentificated ? (
                    <LinkLogin to={LOGOUT}>Logout</LinkLogin>
                ) : (
                    <LinkLogin to={LOGIN}>Login</LinkLogin>
                )}
                </Button>
                <ImgLogo src={logo} alt="logo" />
                <H1Logo>All Japan</H1Logo>
            </WrapperTop>
            <WrapperBody>
                <LinkCart to={CART} className="header-cart">
                    <img src={cart} alt="cart" />
                </LinkCart>

            </WrapperBody>
        </header>
    )
}