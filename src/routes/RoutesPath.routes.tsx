import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { CartPage, HomePage, DetailsPage, LoginPage, RegisterPage } from "../pages/index";
import { Thanks } from "../components/forms/index";
import RegisterForm from "../components/forms/RegisterForm";




export const RoutesPath = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/detail/:id" element={<DetailsPage />} />
                    </Route>

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<CartPage />} />

                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/form" element={<RegisterForm />} />
                    <Route path="/thanks" element={<Thanks />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}