import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectCurrentUser } from "../../redux/selectors/auth.selector";

export default function ProtectedRoutes() {
    const user = useSelector(selectCurrentUser);
    // console.log(user)
    if (user) {
        return <Outlet />
    } else {
        return <Navigate to="/auth/login" replace />
    }
}