import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import ViewCoffee from "../pages/ViewCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Loading from "../components/Loading";
import SignUP from "../pages/SignUP";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('https://cafe-hub-server-with-auth.vercel.app/coffees'),
                hydrateFallbackElement: <Loading></Loading>,
                Component: Home,
            },
            {
                path: "/add-coffee",
                Component: AddCoffee
            },
            {
                path: "/view-coffee/:id",
                loader: ({params}) => fetch(`https://cafe-hub-server-with-auth.vercel.app/coffees/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
                Component: ViewCoffee
            },
            {
                path: "/update-coffee/:id",
                loader: ({params}) => fetch(`https://cafe-hub-server-with-auth.vercel.app/coffees/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
                Component: UpdateCoffee
            },
            {
                path: "signup",
                Component: SignUP
            },
            {
                path: "signin",
                Component: SignIn
            },
            {
                path: "users",
                loader: () => fetch('https://cafe-hub-server-with-auth.vercel.app/users'),
                hydrateFallbackElement: <Loading></Loading>,
                Component: Users
            }
        ]
    }
])