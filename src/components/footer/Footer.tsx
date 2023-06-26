import './Footer.css'
import icon1 from '../../assets/img/icons8-facebook-nuevo-64-removebg-preview.webp'
import icon2 from '../../assets/img/icons8-instagram-50-removebg-preview.webp'
import icon3 from '../../assets/img/icons8-pinterest-50__1_-removebg-preview.webp'
export const Footer = () => {
    return (
        <footer className="footer">
        
            <h3 className="footer-text">
                Subscribe to our newletter!
            </h3>
            <div className="footer-button-newsletter">
            <input className="footer-input" type="text" name="newsletter" placeholder=" Email Address"/>
            <button className="footer-button" type="submit">
                SUBSCRIBE
            </button>
            </div>
            <div className="footer-social_media">
            <img className="footer-img-social_media" src={icon1} alt="facebook_icon"/>
            <img className="footer-img-social_media" src={icon2} alt="instagram_icon"/>
            <img className="footer-img-social_media" src={icon3} alt="pinterest_icon"/>
            </div>
            
        </footer>
    )
}