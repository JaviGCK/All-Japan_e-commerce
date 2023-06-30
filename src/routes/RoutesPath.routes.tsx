import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProps } from "../types/produtc";
import { FC } from "react";
import { Layout } from "../Layout";
import { HomePage } from "../pages/HomePage"
import { DetailsPage } from "../pages/DetailsPage";
import { CartPage } from "../pages/CartPage";


export const RoutesPath: FC<ProductProps> = () => {
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