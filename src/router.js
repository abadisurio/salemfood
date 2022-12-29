import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Menu from "./pages/Menu";
import Admin from "./pages/Admin";
import EditItem from "./pages/EditItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/edit/:type/:itemId",
        element: <EditItem />,
    },
]);