import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;
