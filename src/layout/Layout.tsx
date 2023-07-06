import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Outlet } from "react-router-dom"
import { FilterProvider } from "../context/FilterContext"
import { ProductsProvider } from "../context/ProductContext"


export const Layout = () => {

    return (
        <>
            <FilterProvider>
                <ProductsProvider>
                        <Header />
                        <main>
                            <Outlet />
                        </main>
                </ProductsProvider>
            </FilterProvider>

            <Footer />
        </>
    )
}