import { useNavigate } from "react-router";
import { btnPrimaryClasses } from "../utils/tailwind_classes/button.classes";
import { inputPrimaryClasses } from "../utils/tailwind_classes/input.classes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerValidator } from "../utils/validator"
import { useDispatch } from "react-redux";
import { registerRequest } from "../redux/actions/auth.actions"
export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(registerRequest(values));
    }
    return (
        <>
            <div className="flex-1 flex items-center justify-center text-white">
                <div className="rounded-3xl hover:border-primary bg-secondary border-transparent transition-all duration-300 border-2 px-4 lg:px-14 py-10 lg:max-w-lg sm:max-w-md w-full text-center mx-3">
                    <h1 className=" mb-6 font-extrabold text-white text-3xl tracking-wider">Register</h1>
                    <Formik
                        initialValues={{}}
                        validationSchema={registerValidator}
                        onSubmit={onSubmit}
                    >{(values, setFieldValue) => (
                        <Form action="#" className="flex flex-col items-center justify-center gap-2 mt-10">
                            <div className="flex flex-row w-full gap-4">
                                <div className="flex flex-col items-start self-start w-full gap-1">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="firstName" className="self-start text-lg">First Name <span className="text-danger">*</span></label>
                                        <ErrorMessage name="firstName">{msg => <div>{msg}</div>}</ErrorMessage>
                                    </div>
                                    <Field
                                        className={inputPrimaryClasses + " w-full"}
                                        placeholder="enter first name ..."
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                    />
                                </div>
                                <div className="flex flex-col items-start self-start w-full gap-1">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="lastName" className="self-start text-lg">Last Name <span className="text-danger">*</span></label>
                                        <ErrorMessage name="lastName">{msg => <div>{msg}</div>}</ErrorMessage>
                                    </div>
                                    <Field
                                        className={inputPrimaryClasses + " w-full"}
                                        placeholder="enter last name ..."
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row w-full gap-4">
                                <div className="flex flex-col items-start self-start w-full gap-1">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="nickName" className="self-start text-lg">Nick Name</label>
                                        <ErrorMessage name="nickName">{msg => <div>{msg}</div>}</ErrorMessage>
                                    </div>
                                    <Field
                                        className={inputPrimaryClasses + " w-full"}
                                        placeholder="enter nick name ..."
                                        type="text"
                                        name="nickName"
                                        id="nickName"
                                    />
                                </div>
                                <div className="flex flex-col items-start self-start w-full gap-1">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="phone" className="self-start text-lg">Phone</label>
                                        <ErrorMessage name="phone">{msg => <div>{msg}</div>}</ErrorMessage>
                                    </div>
                                    <Field
                                        className={inputPrimaryClasses + " w-full"}
                                        placeholder="enter nick name ..."
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                    />
                                    {/* #fff yet to be implemented */}
                                    {/* <PhoneInput
                                        placeholder="Enter phone number"
                                        className={inputPrimaryClasses + " w-full"}
                                        type="tel"
                                        value={values.phone}
                                        onChange={(value) => setFieldValue('phone', value)}
                                    /> */}
                                </div>
                            </div>
                            <div className="flex flex-col items-start self-start w-full gap-1">
                                <div className="flex gap-3 items-center">
                                    <label htmlFor="email" className="self-start text-lg">Email <span className="text-danger">*</span></label>
                                    <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>
                                </div>
                                <Field
                                    className={inputPrimaryClasses + " w-full relative"}
                                    placeholder="enter email ..."
                                    type="email" name="email" id="email" />
                            </div>
                            <div className="flex flex-col items-start self-start w-full gap-1">
                                <div className="flex gap-3 items-center">
                                    <label htmlFor="password" className="self-start text-lg">Password <span className="text-danger">*</span></label>
                                    <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>
                                </div>
                                <Field
                                    className={inputPrimaryClasses + " w-full"}
                                    placeholder="enter password ..."
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                            <div className="flex flex-col items-start self-start w-full gap-1">
                                <div className="flex gap-3 items-center">
                                    <label htmlFor="confirmPassword" className="self-start text-lg">Confirm Password <span className="text-danger">*</span></label>
                                    <ErrorMessage name="confirmPassword">{msg => <div>{msg}</div>}</ErrorMessage>
                                </div>
                                <Field
                                    className={inputPrimaryClasses + " w-full"}
                                    placeholder="enter password ..."
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                />
                            </div>
                            <button className={btnPrimaryClasses + " w-full"} type="submit">Register</button>
                            {/*
                                "nickName":"ali",
                            "password":"aA!12345",
    "phone":"+923017977929" */}
                        </Form>
                    )}</Formik>
                    <div className="mt-3 text-white">
                        <span>
                            Already have an account?{" "}
                        </span>
                        <a href="#" className="underline hover:text-primary" onClick={() => {
                            navigate("/auth/login")
                        }}>Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}
