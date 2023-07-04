import logo from '../../assets/img/logo-all-japan.webp'
import cart from '../../assets/img/solar_cart-large-2-outline.webp'
import { CART, LOGIN, LOGOUT } from '../../config/routes/path'
import { useAuthContext } from '../../context'
import { H1Logo, Button, Wrapp, Links, ImgLogo } from '../style'

export const Header = () => {
    const { isAuthentificated } = useAuthContext();

    return (
        <header>
            <Wrapp Top>
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
            <Wrapp Body>
                <Links $cart to={CART} className="header-cart">
                    <img src={cart} alt="cart" />
                </Links>

            </Wrapp>
        </header>
    )
}