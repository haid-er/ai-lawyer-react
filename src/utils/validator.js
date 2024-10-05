import * as Yup from "yup"

const registerValidator = Yup.object({
    email: Yup.string().trim()
        .email("Email is invalid")
        .required("Email is required"),
    // .test('email-exist', t('form_field.err_email_exists'), async function (value) {
    //     if (!value) return true;
    //     const isEmailTaken = await debouncedEmailExist(value);
    //     return !isEmailTaken;
    // }),
    firstName: Yup.string().trim().required("Firstname is required"),
    lastName: Yup.string().trim().required("Lastname is required"),
    nickName: Yup.string().trim().optional().min(3, "Nickname must be more than 2 characters").max(100, "Nickname must be less than 100 characters"),
    phone: Yup.string().matches(
        /^(\+?\d{1,3}[- ]?)?\d{10}$/,
        'Phone number is not valid'
    ),
    password: Yup.string()
        .trim()
        .required("Password is required")
        .min(8, "Password must be 8 character long")
        .max(100, "Password must be less or equal 100 characters.")
        .matches(/[A-Z]/, "Password must have at least 1 uppercase character")
        .matches(/[a-z]/, "Password must have at least 1 lowercase character")
        .matches(/\d/, "Password must have at least 1 digit")
        .matches(
            /[@$!%*?&#]/,
            "Password must contain 1 symbol",
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password and Confirm Password does not match")
        .required("Confirm Password is required"),
});
const loginValidator = Yup.object({
    email: Yup.string().trim()
        .email("Email is invalid")
        .required("Email is required"),
    // .test('email-exist', t('form_field.err_email_exists'), async function (value) {
    //     if (!value) return true;
    //     const isEmailTaken = await debouncedEmailExist(value);
    //     return !isEmailTaken;
    // }),
    password: Yup.string()
        .trim()
        .required("Password is required")
});

export { registerValidator, loginValidator };