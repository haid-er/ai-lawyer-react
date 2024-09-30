import { useNavigate } from "react-router";
import { btnPrimaryClasses } from "../../utils/tailwind_classes/button.classes";
import { inputPrimaryClasses } from "../../utils/tailwind_classes/input.classes";

export default function Register() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate("/auth/login   ")
    }
    return (
        <>
            <div className="flex-1 flex items-center justify-center text-white">
                <div className="rounded-3xl hover:border-primary bg-secondary border-transparent transition-all duration-300 border-2 px-4 lg:px-14 py-10 lg:max-w-lg sm:max-w-md w-full text-center mx-3">
                    <h1 className=" mb-6 font-extrabold text-white text-3xl tracking-wider">Register</h1>
                    <form action="#" className="flex flex-col items-center justify-center gap-4 mt-10">
                        <div className="flex flex-col items-start self-start w-full gap-1">
                            <label htmlFor="fName" className="self-start font-bold text-xl">First Name</label>
                            <input className={inputPrimaryClasses + " w-full"} placeholder="enter first name ..." type="text" name="fName" id="fName"></input>
                        </div>
                        <div className="flex flex-col items-start self-start w-full gap-1">
                            <label htmlFor="lName" className="self-start font-bold text-xl">Last Name</label>
                            <input className={inputPrimaryClasses + " w-full"} placeholder="enter last name ..." type="text" name="lName" id="lName"></input>
                        </div>
                        <div className="flex flex-col items-start self-start w-full gap-1">
                            <label htmlFor="email" className="self-start font-bold text-xl">Email</label>
                            <input className={inputPrimaryClasses + " w-full"} placeholder="enter email ..." type="email" name="email" id="email"></input>
                        </div>
                        <div className="flex flex-col items-start self-start w-full gap-1">
                            <label htmlFor="password" className="self-start font-bold text-xl">Password</label>
                            <input className={inputPrimaryClasses + " w-full"} placeholder="enter password ..." type="password" name="password" id="password"></input>
                        </div>
                        <button className={btnPrimaryClasses + " w-full"} type="submit">Sign In</button>

                    </form>

                    <div className="mt-3 text-white">
                        <span>
                            Already have an account?{" "}
                        </span>
                        <a href="#" className="underline hover:text-primary" onClick={handleSubmit}>Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}