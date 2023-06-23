import './Header.css'
import logo from '../../assets/img/logo-all-japan.webp'
import user from '../../assets/img/fa_user.webp'
import cart from '../../assets/img/solar_cart-large-2-outline.webp'

export const Header = () => {
    return (
        <header>
            <div className="header-top-div">
                <img className="header-logo" src={logo} alt="logo"/>
                <h1 className="header-title">All Japan</h1>
                <img className="header-user" src={user} alt="user"/>
            </div>
            <div className="header-body-div">
                <input className="header-searchbar"type="text" name="searchbar" placeholder="search"/>
                <span className="header-span-counter"></span>
                <img className="header-cart" src={cart} alt="cart"/>
            </div>

        </header>
    )
}