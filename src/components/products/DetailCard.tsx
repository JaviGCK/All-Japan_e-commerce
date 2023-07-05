import { FC, useState } from "react";
import { ProductProps } from "../../types/produtc";
import hearth from '../../assets/img/mdi-heart (1).webp';
import { ButtonFav, ImgDetail, ImgHearth, Wrapp, WrappSection } from '../style';

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
