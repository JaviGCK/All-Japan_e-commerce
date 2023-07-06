import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { CartPage, HomePage, DetailsPage, RegisterPage, PrivatePage } from "../../pages/index";
import { CART, CHECKOUT, DETAIL, HOME, LOGIN, LOGOUT, PRIVATE, THANKS } from "./path";
import { Thanks, RegisterForm } from "../../components/forms";
import { AuthContextProvider } from "../../context";
import { Private } from "../../components/login/Welcome";
import { Login, Logout } from "../../components/login";


export const RoutesPath = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={HOME} element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path={DETAIL} element={<DetailsPage />} />
                        <Route path={LOGIN} element={<Login />} />
                        <Route path={LOGOUT} element={<Logout />} />
                    </Route>



                    <Route path={PRIVATE} element={<Private />}>
                        <Route index element={<PrivatePage />} />
                    </Route>

                    <Route path={CART} element={<CartPage />} />

                    <Route path={CHECKOUT} element={<RegisterPage />}>
                        <Route index element={<RegisterForm />} />
                        <Route path={THANKS} element={<Thanks />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
};
