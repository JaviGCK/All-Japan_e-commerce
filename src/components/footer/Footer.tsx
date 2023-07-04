import icon1 from '../../assets/img/icons8-facebook-nuevo-64-removebg-preview.webp'
import icon2 from '../../assets/img/icons8-instagram-50-removebg-preview.webp'
import icon3 from '../../assets/img/icons8-pinterest-50__1_-removebg-preview.webp'
import { Button, H3Subscribe, ImgSocialMedia, InputFooter, WrappFooter, WrappSocialMedia } from '../style'
export const Footer = () => {
    return (
        <WrappFooter>
        
            <H3Subscribe>
                Subscribe to our newletter!
            </H3Subscribe>
            <div>
            <InputFooter type="text" name="newsletter" placeholder=" Email Address"/>
            <Button $subs={true} type="submit">
                SUBSCRIBE
            </Button>
            </div>
            <WrappSocialMedia>
            <ImgSocialMedia src={icon1} alt="facebook_icon"/>
            <ImgSocialMedia src={icon2} alt="instagram_icon"/>
            <ImgSocialMedia src={icon3} alt="pinterest_icon"/>
            </WrappSocialMedia>
            
        </WrappFooter>
    )
}