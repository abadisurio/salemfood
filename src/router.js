import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Menu from "./pages/menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
]);