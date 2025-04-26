export default function ResponseMessage({ text = "message", type = "prompt" || "response" }) {
    const classListContainer = type === "response" ? "bg-tertiary-light self-start mr-16" : "bg-tertiary self-end ml-16";
    const classListChild = type === "response" ? "text-secondary" : "text-white";
    return (
        <>
            <div className={"rounded-xl p-3 " + classListContainer} >
                <p className={"text-lg font-normal " + classListChild}>{text}</p>
            </div>
        </>
    )
}