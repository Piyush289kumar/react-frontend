import useTokenStore from "@/store";
import { Navigate, Outlet } from "react-router";

function AuthLayout() {
    const token = useTokenStore((state) => state.token);
    if (token) {
        return <Navigate to={'/admin/dashboard'} replace />
    }
    return (        
        <Outlet />
    )
}

export default AuthLayout