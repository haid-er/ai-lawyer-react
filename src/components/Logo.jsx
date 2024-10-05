import LogoDark from "/public/logo-d.png"
import LogoLight from "/public/logo-w.png"
export default function Logo({ mode }) {
    if (mode === 'dark') {
        return (
            <img src={LogoDark} width={80} height={80} alt="Logo of AI lawyer" />
        )
    }
    if (mode === 'light') {
        return (
            <img src={LogoLight} width={80} height={80} alt="Logo of AI lawyer" />
        )
    }
}