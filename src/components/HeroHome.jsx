import LawImage from "../assets/law.png"
export default function HeroHome({ headingPrimary, headingSecondary, headingTertiary }) {
    return (
        <>
            <div className="container mx-auto max-h-72 min-h-[60vh] rounded-[3rem] bg-transparent flex items-center justify-center flex-col relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-full h-full bg-primary -z-10 opacity-10"></div>
                <div className="flex items-center justify-center border rounded-full p-1 text-logo-color border-logo-color">
                    <span className="w-7 mx-auto justify-self-end">
                        <img src={LawImage} width={20} alt="Image related to law" className="mx-auto" />
                    </span>
                    <div>
                        {headingTertiary}
                    </div>
                </div>
                <h1 className="text-[4.5rem] font-bold text-secondary">{headingPrimary}</h1>
                <p className="text-secondary italic text-xl">{headingSecondary}</p>
            </div>
        </>
    )
}