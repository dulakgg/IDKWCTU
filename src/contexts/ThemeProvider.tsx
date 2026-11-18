import { useLocalStorage } from "@uidotdev/usehooks";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}