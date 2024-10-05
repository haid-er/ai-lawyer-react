import { Outlet } from "react-router";

export default function Auth() {
    return (
        <div className="flex items-center justify-center h-full">
            <Outlet />
        </div>
    )
}