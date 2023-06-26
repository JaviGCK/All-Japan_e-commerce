import { Header } from "../components/header/Header"
import { Navbar } from "../components/navbar/Navbar"
import { SectionProducts } from "../components/sectionProducts/SectionProduct"
import { Footer } from "../components/footer/Footer"


export const Home = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <SectionProducts />
            <Footer />
        </>
    )
}