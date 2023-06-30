import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContext";
import { getFetchData } from "../../api/function/FetchData";
import { DetailCard } from "./DetailCard";

export const ProductDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };


    const { products, changeProducts } = useContext(ProductsContext);

    useEffect(() => {

        const fetchData = async () => {
            const newProducts = await getFetchData();
            changeProducts(newProducts);
        };
        fetchData();
    }, []);

    if (products === null) return null;

    


    const product = products.find((product)=> product.id === id);


    return (
        <div>
          {product && <DetailCard {...product} key={product.id} />}
        </div>
      );
      
};
