import { useLocalStorage } from "@uidotdev/usehooks";
import { ThemeContext } from "./themeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}