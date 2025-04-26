import { Outlet } from "react-router";
import HomeHeader from "../../components/HomeHeader";

export default function HomeLayout() {
    return (
        <>
            <div className="py-5">
                <HomeHeader />
            </div>
            <Outlet />
        </>
    )
}