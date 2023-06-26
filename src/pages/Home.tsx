import { Header } from "../components/header/Header"
import { Navbar } from "../components/navbar/Navbar"
import { Products } from "../components/products/Products"
import { Footer } from "../components/footer/Footer"
import { ProductProps } from "../types/produtc"


export const Home = (props: ProductProps) => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Products {...props} />
            <Footer />
        </>
    )
}