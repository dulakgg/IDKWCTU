import { createContext, useContext } from "react";

interface Theme {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export const ThemeContext = createContext<Theme | null>(null);

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useSettings must be used inside SettingsProvider");
    }

    return context;
}