import { inputSecondaryClasses } from "../utils/tailwind_classes/input.classes";
import ResponseMessage from "./ResponseMessage";
import arrow from "../assets/arrow.png"
import { connect } from "react-redux";
import { selectChatLoading, selectChatResponse } from "../redux/selectors/user.selector";
import { chatRequest } from "../redux/actions/user.actions";
import { useState } from "react";
import { toast } from "react-toastify";
const ChatBoxComponent = ({ loading, chatResponse, chatRequest }) => {
    const [prompt, setPrompt] = useState('');
    const handlePrompt = async () => {
        if (prompt) {
            const res = await chatRequest({ message: prompt });
            console.log(res)
            toast.success(res?.message)
        }
    }
    const messages = [
        {
            message: "Hello how can I help you today",
            type: "response"
        },
        {
            message: "Hello how can I help you today",
            type: "prompt"
        },
        {
            message: "Hello how can I help you today",
            type: "response"
        },
    ]
    return (
        <>
            <div className="flex flex-col h-full gap-4 px-5 pb-5 items-center max-w-[70%] min-w-[70%] min-h-56 mx-auto">
                <div className="flex-grow w-full flex flex-col gap-2 max-h-[100%] min-h-[80%%] overflow-auto">
                    {
                        messages.map((msg, i) => <ResponseMessage text={msg.message} key={i} type={msg.type} />)
                    }
                    <ResponseMessage text="Hello how can I help you today" />
                    <ResponseMessage text="Hello how can I help you today" type="response" />
                    <ResponseMessage text="Hello how can I help you today" type="response" />
                    <ResponseMessage text="Hello how can I help you today" type="response" />
                    <ResponseMessage text="Hello how can I help you today" type="prompt" />

                </div>
                <div className="flex w-full items-center justify-center gap-2">
                    <textarea name="prompt" id="prompt" className={inputSecondaryClasses + " w-full h-12 px-5 resize-none"} value={prompt} onChange={(e) => {
                        setPrompt(e.target.value)
                    }}></textarea>
                    <button className="bg-tertiary rounded-full overflow-hidden" onClick={handlePrompt}><img src={arrow} alt="submit" width={50} /></button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    loading: selectChatLoading(state),
    chatResponse: selectChatResponse(state),
});

const ChatBox = connect(mapStateToProps, { chatRequest })(ChatBoxComponent);

export default ChatBox;
