import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllProducts from "./pages/AllProducts";
import Discounts from "./pages/Discounts";
import Newitems from "./pages/Newitems";
import WInformation from "./pages/WInformation";
import Not404 from "./pages/Not404";
import Service from "./pages/Service";
import Cart from "./pages/Cart";



export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <AllProducts/>,
            },
            {
                path: "discounts",
                element: <Discounts/>,
            },
            {
                path: "newitems",
                element: <Newitems/>,
            },
            {
                path: "winformation",
                element: <WInformation/>,
            },
            {
                path: "*",
                element: <Not404/>,
            },
            {
                path: "service",
                element: <Service/>,
            },
            {
                path: "cart",
                element: <Cart/>,
            }

        ],
    },
]);