import { Link } from "react-router-dom"
import Logo from "./Logo"
import { btnPrimaryClasses } from "../utils/tailwind_classes/button.classes"
import { useDispatch } from "react-redux"
import { logout } from "../redux/actions/auth.actions";
export default function Header() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <>
            <header className="mb-24">
                <nav className="bg-transparent fixed w-full z-20 top-0 left-0">
                    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto">
                        <Link className="logo" to={"/home"}>
                            <Logo mode={"dark"} />
                        </Link>
                        <input type="checkbox" id="check" />

                        <span className="menu flex items-center [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                            <li><a href="#">General</a></li>
                            <li><button className={btnPrimaryClasses} onClick={handleLogout}>Logout</button></li>
                            <label htmlFor="check" className="close-menu">X</label>
                        </span>
                        <label htmlFor="check" className="open-menu">Menu</label>
                    </ul>
                </nav>
            </header>
        </>
    )
}