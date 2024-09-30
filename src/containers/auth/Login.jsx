import { inputPrimaryClasses } from "../../utils/tailwind_classes/input.classes";
import { btnPrimaryClasses } from "../../utils/tailwind_classes/button.classes"
import { useNavigate } from "react-router";
export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate("/auth/register")
    }
    const changeMode = (event) => {
        document.querySelector('body').classList.toggle('theme-dark')
    }
    return <>
        <div className="flex-1 flex items-center justify-center text-white">
            <div className="rounded-3xl hover:border-primary bg-secondary border-transparent transition-all duration-300 border-2 px-4 lg:px-14 py-10 lg:max-w-lg sm:max-w-md w-full text-center mx-3">
                <h1 className=" mb-6 font-extrabold text-white text-3xl tracking-wider">Sign In</h1>
                <form action="#" className="flex flex-col items-center justify-center gap-4 mt-10">
                    <div className="flex flex-col items-start self-start w-full gap-1">
                        <label htmlFor="email" className="self-start font-bold text-xl">Email</label>
                        <input className={inputPrimaryClasses + " w-full"} placeholder="enter email ..." type="email" name="email" id="email"></input>
                    </div>
                    <div className="flex flex-col items-start self-start w-full gap-1">
                        <label htmlFor="password" className="self-start font-bold text-xl">Password</label>
                        <input className={inputPrimaryClasses + " w-full"} placeholder="enter password ..." type="password" name="password" id="password"></input>
                    </div>
                    <button className={btnPrimaryClasses + " w-full"} type="submit" onClick={changeMode}>Sign In</button>

                </form>

                <div className="mt-3 text-white">
                    <span>
                        Don't have an account?{" "}
                    </span>
                    <a href="#" className="underline hover:text-primary" onClick={handleSubmit}>Create One</a>
                </div>
            </div>
        </div>
    </>
}