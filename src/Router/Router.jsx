import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import ForgetPassword from "../pages/Authentication/ForgetPassword/ForgetPassword";
import PrivateRouter from "./PrivateRouter";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import Pricing from "../pages/Pricing/Pricing";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
    // Root layout
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },
            {
                path: 'about_us',
                Component: AboutUs
            },
            {
                path: 'send_parcel',
                element: <SendParcel></SendParcel>,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },
            {
                path: 'pricing',
                element: <Pricing></Pricing>,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },
            {
                path: 'rider',
                element: <PrivateRouter>
                    <Rider></Rider>
                </PrivateRouter>
            }
        ]
    },
    // Authentication layout
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'forget_password',
                Component: ForgetPassword
            }
        ]
    }
]);