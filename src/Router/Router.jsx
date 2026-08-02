import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Authentication from "../Layout/Authentication";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import ForgetPassword from "../pages/Authentication/ForgetPassword/ForgetPassword";
import PrivateRouter from "./PrivateRouter";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
    // Root layout
    {
        path: "/",
        Component: Root,
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
                path: 'send_parcel',
                element: <PrivateRouter>
                    <SendParcel></SendParcel>
                </PrivateRouter>
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
        Component: Authentication,
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