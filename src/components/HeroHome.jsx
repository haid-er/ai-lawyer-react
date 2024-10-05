import Logo from "./Logo";

export default function HeroHome({ mainText, }) {
    return (
        <>
            <div className="container mx-auto max-h-72 min-h-[60vh] rounded-[3rem] bg-primary flex items-center justify-center flex-col">
                <div className="flex items-center border rounded-full px-1 border-gray-light"><span className="w-7 me-1"><Logo mode={"light"} /></span>Hello</div>
                <h1 className="text-[4.5rem] font-bold">Hello</h1>
                <p className="text-secondary italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, excepturi.</p>
            </div>
        </>
    )
}