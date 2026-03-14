import { createBrowserRouter, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Categories from "../components/sections/Categories";
import JustIn from "../components/sections/JustIn";
import Articles from "../components/sections/Articles";
import Features from "../components/sections/Features";
import MainLayout from "../components/layout/MainLayout";

export const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/shop", element: <Categories /> },
            { path: "/products", element: <JustIn /> },
            { path: "/articles", element: <Articles /> },
            { path: "/shipping-policy", element: <Features /> },
            { path: "/return-refund", element: <Features /> },
            { path: "/support", element: <Features /> },

            { path: "*", element: <NotFound /> },
        ]
    },
]);
