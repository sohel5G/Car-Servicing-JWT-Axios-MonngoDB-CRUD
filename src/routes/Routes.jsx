import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import LogIn from "../pages/login/LogIn.jsx";
import Register from "../pages/register/Register.jsx";
import Contact from "../pages/contact/Contact.jsx";

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
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;
