import logo from '../../assets/img/logo-all-japan.webp'
import cart from '../../assets/img/solar_cart-large-2-outline.webp'
import home from '../../assets/img/home.png'
import { CART, HOME, LOGIN, LOGOUT } from '../../config/routes/path'
import { useAuthContext } from '../../context'
import { H1Logo, Button, Wrapp, Links, ImgLogo, ImgHome } from '../style'

export const Header = () => {
    const { isAuthentificated } = useAuthContext();

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
                    <ImgHome src={home} alt="home"/>
                </Links>
                <Links $cart to={CART}>
                    <img src={cart} alt="cart" />
                </Links>

            </Wrapp>
        </header>
    )
}