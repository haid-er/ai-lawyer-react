import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    useEffect(() => {
        document.querySelector("#sideBar").classList.toggle('-ml-64');
    }, [sideBarOpen])
    return (
        <>
            <div className="flex overflow-x-hidden h-screen bg-white z-50">
                <aside className="flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300 -ml-64" id="sideBar">
                    <div className="h-64 bg-gray-900"></div>
                    <nav className="flex-1 flex flex-col bg-white">
                        <a href="#" className="p-2">Nav Link 1</a>
                        <a href="#" className="p-2">Nav Link 2</a>
                        <a href="#" className="p-2">Nav Link 3</a>
                    </nav>
                </aside>
                <div className="flex-1">
                    <header className="flex items-center p-4 text-semibold text-gray-100 bg-gray-900">
                        <button className="p-1" onClick={() => { setSideBarOpen(prev => !prev) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </header>
                    <main className="">
                        <ul>
                            <li>prof</li>
                            <li>hist</li>
                            <li>sett</li>
                        </ul>
                    </main>
                </div >
            </div >
        </>
    );
};

export default Sidebar;
