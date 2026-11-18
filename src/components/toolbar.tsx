import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

export default function Toolbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { darkMode, setDarkMode } = useTheme();

    return (
        <>
            <div className={`flex items-end justify-left fixed bottom-1 left-1 h-20 w-20 transition-all duration-100 ease-in-out hover:scale-150 hover:translate-x-6  hover:-translate-y-6 ${sidebarOpen ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}>
                <button onClick={() => setSidebarOpen(true)} className="bg-amber-500 h-10 w-10 rounded-2xl cursor-pointer flex items-center justify-center">
                    <FaPencil color="white" />
                </button>
            </div>
            <div className={`fixed top-0 left-0 z-9999 h-screen w-75 bg-amber-500 transition-transform duration-500 rounded-r-2xl ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={() => setSidebarOpen(false)} className="cursor-pointer absolute top-2 right-2">
                    <CgClose size={30} color="white"/>
                </button>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Switch to light" : "Switch to dark"}
                </button>
            </div>
        </>
    );
}