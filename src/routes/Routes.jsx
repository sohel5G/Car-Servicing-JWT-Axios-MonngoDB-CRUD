import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>
    },
]);

export default router;