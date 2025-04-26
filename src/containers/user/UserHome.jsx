import { useSelector } from "react-redux";
import ChatBox from "../../components/ChatBox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Profile from "./Profile";
import { selectCurrentUser } from "../../redux/selectors/auth.selector";

export default function UserHome() {
    // const currentUser = useSelector(selectCurrentUser);
    // console.log(currentUser)
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <ChatBox />
                </div>
            </div>

        </>
    )
}