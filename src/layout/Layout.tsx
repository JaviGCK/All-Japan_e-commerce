import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Navigate, Outlet } from "react-router-dom"
import { FilterProvider } from "../context/FilterContext"
import { ProductsProvider } from "../context/ProductContext"
import { useAuthContext } from "../context"
import { HOME } from "../config/routes/path"


export const Layout = () => {

    const { isAuthentificated } = useAuthContext();


    if(isAuthentificated) {
        return <Navigate to={HOME}/>
    }

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