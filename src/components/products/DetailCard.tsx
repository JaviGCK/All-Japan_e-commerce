import './DetailCard.css'
import { FC } from "react"
import { ProductProps } from "../../types/produtc"
import hearth from '../../assets/img/mdi-heart (1).webp';
import { Link } from 'react-router-dom';






export const DetailCard: FC<ProductProps> = (props) => (
    <section className="section-product-detail-card">
        <div className="product-card-detail-div-img">
            <img className="product-card-detail-img" src={`/src/assets/img/${props.img}`} alt={props.name} />
            <button className="product-card-detail-button-cart" type="button">
                <Link to={`/cart`} className="product-card-detail-link">add to cart</Link>
            </button>
            <button className="product-card-detail-button-fav" type="button">
                <img className="product-card-detail-button-hearth" src={hearth} alt="fav_button" />
            </button>
        </div>
        <div className="product-card-detail-div-info">
            <h2 className="product-card-detail-name">{props.name}</h2>
            <span className="product-card-detail-weight">{props.weight}gr</span>
            <p className="product-card-detail-full-description">{props.fullDescription}</p>

            <span className="product-card-detail-price">{props.price}€</span>


        </div>
    </section>
)
