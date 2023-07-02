import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { CartPage, HomePage, DetailsPage } from "../pages";

export const RoutesPath = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/detail/:id" element={<DetailsPage/>}/>
                    </Route>
                    
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}