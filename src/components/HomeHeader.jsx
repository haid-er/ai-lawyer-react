import Logo from "./Logo"
import { btnPrimaryClasses } from "../utils/tailwind_classes/button.classes"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
export default function HomeHeader() {
    const handleBtn = () => {
        document.querySelector("body").classList.toggle("theme-dark");
    }
    return (
        <div>
            <div className="container mx-auto bg-white rounded-full">
                <div className="flex justify-between grid-cols-5 items-center place-items-center mx-8">
                    <div className="place-self-start">
                        <Link to={"/home"}>
                            <Logo mode={"dark"} />
                        </Link>

                    </div>
                    <ul className="flex items-center justify-center col-span-3 gap-16">
                        <Link to={"/home/faqs"}>FAQs</Link>
                        <Link to={"/home/blog"}>Blog</Link>
                        <Link to={"/home/contact"}>Contact</Link>
                    </ul>
                    <div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link className={btnPrimaryClasses} to={"/auth/register"}>Try For Free</Link>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}