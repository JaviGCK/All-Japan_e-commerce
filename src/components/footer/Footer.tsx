import icon1 from '../../assets/img/icons8-facebook-nuevo-64-removebg-preview.webp'
import icon2 from '../../assets/img/icons8-instagram-50-removebg-preview.webp'
import icon3 from '../../assets/img/icons8-pinterest-50__1_-removebg-preview.webp'
import { Button, H3, Wrapp, WrappFooter, Input, ImgSocialMedia } from '../style'

export const Footer = () => {
    return (
        <WrappFooter>
        
            <H3>
                Subscribe to our newletter!
            </H3>
            <div>
            <Input type="text" name="newsletter" placeholder=" Email Address"/>
            <Button $subs={true} type="submit">
                SUBSCRIBE
            </Button>
            </div>
            <Wrapp $SocialMedia>
            <ImgSocialMedia src={icon1} alt="facebook_icon"/>
            <ImgSocialMedia src={icon2} alt="instagram_icon"/>
            <ImgSocialMedia src={icon3} alt="pinterest_icon"/>
            </Wrapp>
            
        </WrappFooter>
    )
}