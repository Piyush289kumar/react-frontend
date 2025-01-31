import { createBrowserRouter } from "react-router"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import AdminLayout from "@/layout/AdminLayout"
import BooksPage from "@/pages/Books/BooksPage"
import AuthLayout from "@/layout/AuthLayout"
import CreateBookPage from "./pages/Books/CreateBookPage"


const router = createBrowserRouter([
    {
        path: '/admin/dashboard',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <HomePage />

            },
            {
                path: 'books',
                element: <BooksPage />

            },
            {
                path: 'create-book',
                element: <CreateBookPage />

            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }

])
export default router