import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import ViewCoffee from "../pages/ViewCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('http://localhost:3000/coffees'),
                hydrateFallbackElement: <Loading></Loading>,
                Component: Home,
            },
            {
                path: "/add-coffee",
                Component: AddCoffee
            },
            {
                path: "/view-coffee",
                Component: ViewCoffee
            },
            {
                path: "/update-coffee",
                Component: UpdateCoffee
            }
        ]
    }
])