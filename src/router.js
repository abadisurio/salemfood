import Menu from "./pages/Menu";
import Admin from "./pages/Admin";
import EditItem from "./pages/EditItem";
import DeleteItem from "./pages/DeleteItem";

export const router = [
    {
        path: "/",
        element: <Menu />,
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
    {
        path: "/delete/:type/:itemId",
        element: <DeleteItem />,
    },
];