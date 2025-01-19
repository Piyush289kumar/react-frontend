import { createBrowserRouter } from "react-router"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])
export default router