import { FC, useState } from "react";
import { ProductProps } from "../../types/produtc";
import hearth from '../../assets/img/mdi-heart (1).webp';
import goback from '../../assets/img/back_icon-icons.com_71028.png'
import { Button, ButtonFav, ImgDetail, ImgHearth, Links, Wrapp, WrappSection } from '../style';
import { HOME } from "../../config/routes/path";

/**
 * @param  Props from Product
 * @returns a card with all elements needed to show the product.
 */
export const DetailCard: FC<ProductProps> = (props) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavButtonClick = () => {
    setIsFav(!isFav);
  };

  return (
    <WrappSection>
      <Button $back>
        <Links $home to={HOME}>
          <ImgDetail src={goback} alt="Go back"/>
        </Links>
      </Button>
      <Wrapp $DetailProduct>
        <ImgDetail src={`/src/assets/img/${props.img}`} alt={props.name} />

        <ButtonFav $fav={isFav} type="button" onClick={handleFavButtonClick}>
          <ImgHearth src={hearth} alt="fav_button" />
        </ButtonFav>
      </Wrapp>
      <Wrapp $detailtext>
        <h2>{props.name}</h2>
        <p>{props.weight}gr</p>
        <p>{props.fullDescription}</p>
        <h2>{props.price}€</h2>
        
      </Wrapp>
    </WrappSection>
  );
};
