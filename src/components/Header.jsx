import { Link } from "react-router-dom"
import Logo from "./Logo"
export default function Header() {
    return (
        <>
            <header className="mb-24">
                <nav className="bg-transparent fixed w-full z-20 top-0 left-0">
                    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto">
                        <Link className="logo" to={"/auth/home"}>
                            {/* <h3 className="font-bold text-2xl">{Logo}</h3> */}
                            <Logo mode={"dark"} />
                        </Link>
                        <input type="checkbox" id="check" />

                        <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                            <li><a href="#">General</a></li>
                            <label for="check" className="close-menu">X</label>
                        </span>
                        <label for="check" className="open-menu">Menu</label>
                    </ul>
                </nav>
            </header>
        </>
    )
}