import ChatBox from "../../components/ChatBox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Profile from "./Profile";

export default function UserHome() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <ChatBox />
                    <Profile />
                </div>
            </div>

        </>
    )
}