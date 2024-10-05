import Logo from "./Logo"
import { btnPrimaryClasses } from "../utils/tailwind_classes/button.classes"
import { motion } from "framer-motion"
export default function HomeHeader() {
    const handleBtn = () => {
        document.querySelector("body").classList.toggle("theme-dark");
    }
    return (
        <div>

            <motion.div

                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],

                }}
            >

                <div className="container mx-auto bg-white rounded-full">
                    <div className="grid grid-cols-5 items-center place-items-center">
                        <div className="place-self-start ms-8">
                            <Logo mode={"dark"} />

                        </div>
                        <ul className="flex items-center justify-center col-span-3 gap-16">
                            <li>FAQs</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <button className={btnPrimaryClasses} onClick={handleBtn}>Try For Free</button>
                            </motion.button>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}