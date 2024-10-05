import HomeHeader from "../../components/HomeHeader"
import HeroHome from "../../components/HeroHome"
export default function PublicHome() {
    return (
        <>
            <div className="py-5">
                <HomeHeader />
            </div>
            <HeroHome />
        </>
    )
}