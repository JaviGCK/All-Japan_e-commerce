import './Header.css'
import logo from '../../assets/img/logo-all-japan.webp'
import cart from '../../assets/img/solar_cart-large-2-outline.webp'
import { Link } from 'react-router-dom'
import { CART, LOGIN, LOGOUT } from '../../config/routes/path'
import { useAuthContext } from '../../context'

export const Header = () => {
    const { isAuthentificated } = useAuthContext(); 
    
    return (
        <header>
            <div className="header-top-div">
                <img className="header-logo" src={logo} alt="logo"/>
                <h1 className="header-title">All Japan</h1>
            </div>
            <div className="header-body-div">
                <input className="header-searchbar" type="text" name="searchbar" placeholder="search"/>
                <span className="header-span-counter"></span>
                <Link to={CART} className="header-cart">
                <img  src={cart} alt="cart"/>
                </Link>
                {isAuthentificated ? (
          <Link to={LOGOUT}>Logout</Link>
        ) : (
          <Link to={LOGIN}>Login</Link> 
        )}
            </div>
        </header>
    )
}