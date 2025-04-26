import { Navigate, Outlet } from "react-router";
import HomeHeader from "../../components/HomeHeader";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/auth.selector";

export default function Auth() {
    const user = useSelector(selectCurrentUser);
    if (!user) {
        return (
            <>
                <div className="py-5">
                    <HomeHeader />
                </div>
                <div className="flex items-center justify-center h-full">
                    <Outlet />
                </div>
            </>
        )
    } else {
        return <Navigate to={"/user"} replace />
    }
}